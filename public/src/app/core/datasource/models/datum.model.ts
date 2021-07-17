export class Datum {
  constructor(
    public category: string | number,
    public value: string | number,
    public series?: string) {}
}
