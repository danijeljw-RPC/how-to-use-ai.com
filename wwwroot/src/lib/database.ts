export interface D1RunResult {
  success: boolean;
  meta: { changes?: number };
}

export interface D1StatementLike {
  bind(...values: unknown[]): D1StatementLike;
  run(): Promise<D1RunResult>;
}

export interface D1DatabaseLike {
  prepare(sql: string): D1StatementLike;
  batch(statements: D1StatementLike[]): Promise<D1RunResult[]>;
}

export interface RepositoryDependencies {
  now?: () => Date;
  id?: () => string;
}

export function repositoryDependencies(dependencies: RepositoryDependencies = {}) {
  return {
    now: dependencies.now ?? (() => new Date()),
    id: dependencies.id ?? (() => crypto.randomUUID()),
  };
}
