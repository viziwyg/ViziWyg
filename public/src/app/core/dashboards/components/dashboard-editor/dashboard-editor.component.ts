import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dashboard } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard-editor',
  templateUrl: './dashboard-editor.component.html',
  styleUrls: ['./dashboard-editor.component.scss']
})
export class DashboardEditorComponent implements OnInit {

  dashboard: Dashboard;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.uid) {
        this.dashboard = this.dashboardService.get({ uid: params.uid })[0];
        if (!this.dashboard) {
          console.error('DASHBOARD NOT FOUND!');
        }
      }
    });
  }

  ngOnInit(): void {
  }

  save(savedDash: Dashboard) {
    this.router.navigateByUrl(`dashboard/id/${savedDash.uid}`);
  }

}
