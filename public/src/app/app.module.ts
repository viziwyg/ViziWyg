import { DashboardsModule } from './core/dashboards/dashboards.module';
import { DashboardService } from './core/dashboards/services/dashboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LoginPageComponent } from './core/auth/login-page/login-page.component';
import { DashboardComponent } from './core/dashboards/components/dashboard/dashboard.component';
import { HeaderComponent } from './core/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,

    DashboardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
