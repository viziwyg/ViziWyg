import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dashboard } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: Dashboard;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router
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

  createNew(): void {
    this.router.navigateByUrl('/dashboard/new');
  }

}
