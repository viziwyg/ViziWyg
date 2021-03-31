import { DashboardService } from './../../services/dashboard.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dashboard } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard-builder',
  templateUrl: './dashboard-builder.component.html',
  styleUrls: ['./dashboard-builder.component.scss']
})
export class DashboardBuilderComponent implements OnInit {

  @Input() dashboard: Dashboard;

  @Output() onSave: EventEmitter<Dashboard> = new EventEmitter();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  save() {
    const saved = this.dashboardService.save(this.dashboard);
    this.onSave.emit(saved);
  }

}
