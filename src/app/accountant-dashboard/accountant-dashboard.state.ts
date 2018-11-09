import { Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IAccountantDashboardState {
    username: string;
}

@Injectable()
export class AccountantDashboardState {

    private state: IAccountantDashboardState;
    private state$: ReplaySubject<IAccountantDashboardState>;

    constructor() {
        this.state = <IAccountantDashboardState> {};
        this.state$ = new ReplaySubject<IAccountantDashboardState>(1);
    }

    getState(): Observable<IAccountantDashboardState> {
        return this.state$.asObservable();
    }

    setUsername(username: string) {
        this.state.username = username;
        this.state$.next(this.state);
    }

}