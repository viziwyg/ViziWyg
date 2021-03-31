import { Dashboard } from './../../models/dashboard.model';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-selector',
  templateUrl: './dashboard-selector.component.html',
  styleUrls: ['./dashboard-selector.component.scss']
})
export class DashboardSelectorComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {}

  get dashboards(): Dashboard[] {
    return this.dashboardService.dashboards.getValue();
  }

  ngOnInit(): void {
  }

}
