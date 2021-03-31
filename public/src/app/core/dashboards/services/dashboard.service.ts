import { Dashboard } from './../models/dashboard.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as shortid from 'shortid';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboards: BehaviorSubject<Dashboard[]> = new BehaviorSubject([]);
  dashboard: BehaviorSubject<Dashboard>;

  constructor() {
    this.dashboard = new BehaviorSubject(this.dashboards.getValue()[0]);
  }

  new(): Dashboard {
    const dash = new Dashboard();

    dash.title = 'New dashboard';
    dash.version = 0;

    return dash;
  }

  save(dash: Dashboard): Dashboard {
    const insert = dash.id === undefined;

    dash.version++;
    dash.uid = shortid.generate();

    // SAVE, then:
    if (insert) {
      const dashboards = this.dashboards.getValue();
      dashboards.push(dash);
      this.dashboards.next(dashboards);
    }

    return dash;
  }

  get(getBy: { id?: string, uid?: string, title?: string }, matchAll: boolean = true): Dashboard[] {
    const fields = Object.keys(getBy);
    if (fields.length === 0) { return []; }

    return this.dashboards.getValue().filter((dash: Dashboard) => {
      const match = (field: string) => dash[field] === getBy[field];
      return matchAll ? fields.every(match) : fields.some(match);
    });
  }

  delete(uid: string): void {
    // @TODO
  }
}
