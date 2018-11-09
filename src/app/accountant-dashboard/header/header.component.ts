import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountantDashboardState } from '../accountant-dashboard.state';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username$: Observable<string>;
  isDestroyed$: ReplaySubject<boolean>;
  searchInput$: ReplaySubject<string>;

  constructor(
    private accountantDashboardState: AccountantDashboardState
  ) {
    this.isDestroyed$ = new ReplaySubject<boolean>(1);
    this.searchInput$ = new ReplaySubject<string>(1);
  }

  ngOnInit() {
    this.searchInput$
      .pipe(
        takeUntil(this.isDestroyed$)
      )
      .subscribe(d => console.log('asdasdasd'));
    this.username$ = this.accountantDashboardState
      .getState()
      .pipe(
        takeUntil(this.isDestroyed$),
        map(state => state.username)
      );

  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
  }

  searchChanged(term: string) {
    console.log('searchChanged: ', term)
  }

}
