import { Datum } from "./datum.model";

export class DataFrame {

  constructor(public data: Datum[]) {}

  join(joinWith: DataFrame): DataFrame {
    this.data = this.data.concat(joinWith.data);
    return this;
  }

  get series(): string[] {
    return this.data.map(d => d.series);
  }

  get categories(): (string | number)[] {
    return this.data.map(d => d.category);
  }

}
