import { DashboardEditorComponent } from './core/dashboards/components/dashboard-editor/dashboard-editor.component';
import { DashboardManagerComponent } from './core/dashboards/components/dashboard-manager/dashboard-manager.component';
import { DashboardComponent } from './core/dashboards/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './core/auth/login-page/login-page.component';
import { DashboardNewComponent } from './core/dashboards/components/dashboard-new/dashboard-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', children: [
    { path: 'manage', component: DashboardManagerComponent, data: { pageType: 'dashboard-manage' } },
    { path: 'new', component: DashboardNewComponent, data: { pageType: 'dashboard-new' } },
    { path: 'id/:uid', children: [
      { path: 'edit', component: DashboardEditorComponent, data: { pageType: 'dashboard-edit' } },
      { path: '', component: DashboardComponent, data: { pageType: 'dashboard' } }
    ] },
    { path: '', pathMatch: 'full', redirectTo: 'manage' }
  ] },
  { path: 'login', component: LoginPageComponent, data: { pageType: 'login' } },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
