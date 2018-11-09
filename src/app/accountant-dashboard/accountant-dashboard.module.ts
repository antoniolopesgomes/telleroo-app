import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountantDashboardState } from './accountant-dashboard.state';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BodyComponent, DashboardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    InputTextModule
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    AccountantDashboardState
  ]
})
export class AccountantDashboardModule { }
