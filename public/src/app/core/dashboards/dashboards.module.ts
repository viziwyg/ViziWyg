import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DashboardService } from './services/dashboard.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardSelectorComponent } from './components/dashboard-selector/dashboard-selector.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { DashboardNewComponent } from './components/dashboard-new/dashboard-new.component';
import { FormsModule } from '@angular/forms';
import { DashboardEditorComponent } from './components/dashboard-editor/dashboard-editor.component';
import { DashboardBuilderComponent } from './components/dashboard-builder/dashboard-builder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MatButtonModule
  ],
  declarations: [
    DashboardComponent,
    DashboardSelectorComponent,
    DashboardManagerComponent,
    DashboardNewComponent,
    DashboardEditorComponent,
    DashboardBuilderComponent
  ],
  exports: [
    DashboardComponent,
    DashboardManagerComponent
  ]
})
export class DashboardsModule {}
