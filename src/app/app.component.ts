import { Component, OnInit } from '@angular/core';
import { AccountantDashboardState } from './accountant-dashboard/accountant-dashboard.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  
  title = 'testing';

  constructor(
    private accountantDashboardState: AccountantDashboardState
  ) {}

  ngOnInit(): void {
    this.accountantDashboardState.setUsername('Test username');
  }

}
