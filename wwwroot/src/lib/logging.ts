export type StructuredEvent = Readonly<Record<string, string | number | boolean>>;
export type StructuredLogger = (event: StructuredEvent) => void;

export const logStructured: StructuredLogger = (event) => {
  console.info(JSON.stringify(event));
};
