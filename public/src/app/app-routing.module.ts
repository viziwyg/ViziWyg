import { DashboardComponent } from './core/dashboards/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './core/auth/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { pageType: 'dashboard' } },
  { path: 'login', component: LoginPageComponent, data: { pageType: 'login' } },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
