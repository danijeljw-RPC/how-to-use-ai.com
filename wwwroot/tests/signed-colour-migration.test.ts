import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';

it('preserves existing checkout attempts and locks while accepting colour orders', () => {
  const sql=new DatabaseSync(':memory:');
  try {
    sql.exec('PRAGMA foreign_keys=ON');
    sql.exec(readFileSync(new URL('../migrations/0002_digital_store.sql',import.meta.url),'utf8'));
    sql.exec("INSERT INTO store_attempts(id,mode,email,format,currency,amount,product_id,state,expires_at,created_at) VALUES ('old','test','buyer@example.com','signed','aud',4500,'prod_old','open',2000,1000); INSERT INTO store_purchase_locks VALUES ('test','buyer@example.com','signed','old')");
    sql.exec('BEGIN');
    sql.exec(readFileSync(new URL('../migrations/0007_signed_colour.sql',import.meta.url),'utf8'));
    sql.exec('COMMIT');
    expect(sql.prepare('SELECT format,amount,state FROM store_attempts WHERE id=?').get('old')).toMatchObject({format:'signed',amount:4500,state:'open'});
    expect(sql.prepare('SELECT attempt_id FROM store_purchase_locks').get()?.attempt_id).toBe('old');
    expect(sql.prepare('PRAGMA foreign_key_check').all()).toHaveLength(0);
    sql.exec("INSERT INTO store_attempts(id,mode,email,format,currency,amount,product_id,expires_at,created_at) VALUES ('colour','test','colour@example.com','signed_colour','aud',5500,'prod_colour',2000,1000); INSERT INTO store_purchase_locks VALUES ('test','colour@example.com','signed','colour')");
    expect(()=>sql.exec("INSERT INTO store_purchase_locks VALUES ('test','other@example.com','signed','missing')")).toThrow();
  } finally {sql.close();}
});
