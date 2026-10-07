import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import { describe, it, expect, vi } from "vitest";
import { sqliteStore } from "./helpers/sqlite-store";
import { deliverOutbox, enqueueAccess } from "../src/lib/store/email";
function setup() {
  const sql = new DatabaseSync(":memory:");
  for (const name of ["0002_digital_store.sql", "0003_mailersend_outbox.sql", "0004_store_invoices.sql", "0005_invoice_stripe_references.sql"])
    sql.exec(
      readFileSync(new URL(`../migrations/${name}`, import.meta.url), "utf8"),
    );
  return { sql, db: sqliteStore(sql) };
}
const env = {
  SITE_URL: "https://how-to-use-ai.com",
  STORE_MODE: "test",
  MAILERSEND_API_KEY: "fixture",
  STORE_EMAIL_READY: "true",
  STORE_SIGNING_SECRET: "a".repeat(64),
};
describe("durable MailerSend delivery", () => {
  it('attaches the immutable invoice PDF to the purchase email',async()=>{
    const {sql,db}=setup();
    sql.prepare("INSERT INTO store_orders(session_id,mode,email,format,payment_id,amount,currency,status,created_at) VALUES ('cs_invoice','test','buyer@example.com','pdf','pi_invoice',1099,'aud','paid',1000)").run();
    sql.prepare("INSERT INTO store_invoices(session_id,mode,email,snapshot_json) VALUES ('cs_invoice','test','buyer@example.com','{}')").run();
    sql.prepare("UPDATE store_invoices SET pdf_base64=?").run(btoa('%PDF-test-fixture'));
    sql.prepare("INSERT INTO store_outbox(id,mode,email,kind,order_id,next_at,created_at) VALUES ('invoice-job','test','buyer@example.com','order','cs_invoice',1000,1000)").run();
    const request=vi.fn().mockResolvedValue(new Response(null,{status:202,headers:{'x-message-id':'invoice-accepted'}}));
    await deliverOutbox({db,env,now:()=>1000,request});
    const body=JSON.parse(request.mock.calls[0][1].body);
    expect(body.attachments.find((a:{disposition:string})=>a.disposition==='attachment')).toMatchObject({filename:'TEST-HTUAI-0000001.pdf',content:btoa('%PDF-test-fixture')});
    expect(body.to).toEqual([{email:'buyer@example.com'}]);
    expect(sql.prepare('SELECT state FROM store_outbox').get()?.state).toBe('sent');
    sql.close();
  });
  it("does not resend an uncertain submission on later runs", async () => {
    const { sql, db } = setup();
    await enqueueAccess(db, "buyer@example.com", "test", 1000);
    const request = vi.fn().mockRejectedValue(new Error("lost response"));
    await deliverOutbox({ db, env, now: () => 1000, request });
    await deliverOutbox({ db, env, now: () => 2000, request });
    expect(sql.prepare("SELECT state FROM store_outbox").get()?.state).toBe(
      "ambiguous",
    );
    expect(request).toHaveBeenCalledTimes(1);
    sql.close();
  });
  it("retains interrupted leased submissions even when new email is disabled", async () => {
    const { sql, db } = setup();
    await enqueueAccess(db, "buyer@example.com", "test", 1000);
    sql.exec(
      "UPDATE store_outbox SET state='submitting',lease_until=1100,submission_started_at=1000",
    );
    await deliverOutbox({
      db,
      env: { ...env, STORE_EMAIL_READY: "false" },
      now: () => 1200,
    });
    expect(sql.prepare("SELECT state FROM store_outbox").get()?.state).toBe(
      "ambiguous",
    );
    sql.close();
  });
  it("refreshes leases for later jobs in a slow batch", async () => {
    const { sql, db } = setup();
    let time = 1000;
    for (let i = 0; i < 10; i++)
      await enqueueAccess(db, `buyer${i}@example.com`, "test", time);
    const request = vi.fn().mockImplementation(async () => {
      const row = sql
        .prepare(
          "SELECT lease_until FROM store_outbox WHERE state='submitting'",
        )
        .get();
      expect(row?.lease_until).toBe(time + 120);
      time += 15;
      return new Response(null, {
        status: 202,
        headers: { "x-message-id": "accepted" },
      });
    });
    await deliverOutbox({ db, env, now: () => time, request });
    expect(request).toHaveBeenCalledTimes(10);
    expect(
      sql
        .prepare("SELECT count(*) AS n FROM store_outbox WHERE state='sent'")
        .get()?.n,
    ).toBe(10);
    sql.close();
  });
  it("allows only one parallel worker to submit a job", async () => {
    const { sql, db } = setup();
    await enqueueAccess(db, "buyer@example.com", "test", 1000);
    const request = vi
      .fn()
      .mockImplementation(
        async () =>
          new Response(null, {
            status: 202,
            headers: { "x-message-id": "parallel" },
          }),
      );
    await Promise.all([
      deliverOutbox({ db, env, now: () => 1000, request }),
      deliverOutbox({ db, env, now: () => 1000, request }),
    ]);
    expect(request).toHaveBeenCalledTimes(1);
    sql.close();
  });
});
