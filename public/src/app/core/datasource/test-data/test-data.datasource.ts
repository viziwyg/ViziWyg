import { Observable, of } from "rxjs";
import { DataFrame } from "../models/dataframe.model";
import { Datasource } from "../datasource.abstract";
import * as faker from "faker";
import { Datum } from "../models/datum.model";

export class TestDataDatasource extends Datasource {
  constructor() {
    super();
  }

  getData(): Observable<DataFrame> {
    const data: Datum[] = [];
    for (let i = 0; i < 20; i++) {
      data.push(new Datum(faker.date.soon().getTime(), faker.datatype.number({
        min: 10,
        max: 50
      })));
    }
    return of(new DataFrame(data));
  }

  print(): void {
    console.log('HELLO');
  }
}
