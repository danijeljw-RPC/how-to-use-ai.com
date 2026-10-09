type Row = Record<string, unknown>;

class FakeStatement {
  public values: unknown[] = [];

  constructor(public readonly database: FakeD1, public readonly sql: string) {}

  bind(...values: unknown[]): FakeStatement {
    const statement = new FakeStatement(this.database, this.sql);
    statement.values = values;
    return statement;
  }

  async run(): Promise<{ success: boolean; meta: { changes: number } }> {
    return this.database.execute(this);
  }
}

export class FakeD1 {
  newsletter: Row[] = [];
  contacts: Row[] = [];
  events: Row[] = [];
  orders: Row[] = [];
  statements: FakeStatement[] = [];

  prepare(sql: string): FakeStatement {
    return new FakeStatement(this, sql);
  }

  async batch(statements: FakeStatement[]): Promise<Array<{ success: boolean; meta: { changes: number } }>> {
    const snapshot = structuredClone({
      newsletter: this.newsletter,
      contacts: this.contacts,
      events: this.events,
      orders: this.orders,
    });
    try {
      const results = [];
      for (const statement of statements) results.push(await this.execute(statement));
      return results;
    } catch (error) {
      Object.assign(this, snapshot);
      throw error;
    }
  }

  async execute(statement: FakeStatement): Promise<{ success: boolean; meta: { changes: number } }> {
    this.statements.push(statement);
    const sql = statement.sql.replace(/\s+/g, ' ').trim();
    const values = statement.values;
    if (sql.startsWith('INSERT INTO newsletter_signups')) {
      this.newsletter.push(Object.fromEntries(['id', 'email', 'consent_version', 'source_page', 'created_at', 'request_country', 'user_agent'].map((key, index) => [key, values[index]])));
    } else if (sql.startsWith('INSERT INTO contact_messages')) {
      this.contacts.push(Object.fromEntries(['id', 'name', 'email', 'subject', 'message', 'created_at', 'request_country'].map((key, index) => [key, values[index]])));
    } else if (sql.startsWith('INSERT INTO stripe_events')) {
      if (this.events.some((row) => row.stripe_event_id === values[0])) throw new Error('UNIQUE constraint failed: stripe_events.stripe_event_id');
      this.events.push(Object.fromEntries(['stripe_event_id', 'event_type', 'received_at', 'payload_version'].map((key, index) => [key, values[index]])));
    } else if (sql.startsWith('INSERT INTO commerce_orders')) {
      this.orders.push(Object.fromEntries(['id', 'stripe_session_id', 'stripe_payment_id', 'email', 'format', 'status', 'fulfilment_state', 'created_at', 'updated_at'].map((key, index) => [key, values[index]])));
    } else {
      throw new Error(`Unsupported SQL in fake: ${sql}`);
    }
    return { success: true, meta: { changes: 1 } };
  }
}
