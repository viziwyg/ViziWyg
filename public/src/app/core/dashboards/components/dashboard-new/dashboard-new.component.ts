import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../models/dashboard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.scss']
})
export class DashboardNewComponent implements OnInit {

  dashboard: Dashboard;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {
    this.dashboard = this.dashboardService.new();
  }

  ngOnInit(): void {
  }

  save(savedDash: Dashboard): void {
    this.router.navigateByUrl(`dashboard/id/${savedDash.uid}`);
  }

}
