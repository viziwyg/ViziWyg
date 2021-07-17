import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestDataDatasource } from 'src/app/core/datasource/test-data/test-data.datasource';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.scss']
})
export class DashboardManagerComponent implements OnInit {

  constructor(private router: Router) {
    const datasource = new TestDataDatasource();
    datasource.getData().subscribe(data => console.log('DATA:', data, data.categories, data.categories.map(c => new Date(c))));
  }

  ngOnInit(): void {
  }

  newDashboard(): void {
    this.router.navigateByUrl('/dashboard/new');
  }

}
