import { Observable } from "rxjs";
import { DataFrame } from "./models/dataframe.model";

export abstract class Datasource {
  abstract getData(): Observable<DataFrame>;
}

