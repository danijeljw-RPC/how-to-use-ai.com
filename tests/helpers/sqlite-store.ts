import type { DatabaseSync } from 'node:sqlite';
export function sqliteStore(sql: DatabaseSync) {
  class Statement {
    constructor(
      readonly query: string,
      readonly values: (string | number | null)[] = [],
    ) {}
    bind(...values: (string | number | null)[]) {
      return new Statement(this.query, values);
    }
    async first<T>() {
      return (sql.prepare(this.query).get(...this.values) ?? null) as T | null;
    }
    async all<T>() {
      return { results: sql.prepare(this.query).all(...this.values) as T[] };
    }
    async run() {
      return {
        success: true,
        meta: {
          changes: Number(sql.prepare(this.query).run(...this.values).changes),
        },
      };
    }
  }
  return {
    prepare: (query: string) => new Statement(query),
    async batch(statements: Statement[]) {
      sql.exec('BEGIN');
      try {
        const results = [];
        for (const statement of statements) results.push(await statement.run());
        sql.exec('COMMIT');
        return results;
      } catch (error) {
        sql.exec('ROLLBACK');
        throw error;
      }
    },
  };
}
