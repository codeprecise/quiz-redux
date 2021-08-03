import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { AppRoutes } from '../app-routing.module';
import { AppSelectors } from '../redux/app.types';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private store: Store<any>, private router: Router) {}

  start() {
    const navigation$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => e as NavigationEnd)
    );

    const isQuizEnd$ = this.store.select(AppSelectors.isQuizEnd).pipe(
      distinctUntilChanged()
    );

    const observable$ = combineLatest([navigation$, isQuizEnd$]);

    observable$.subscribe(([route, isQuizEnd]) => {
      const correctRoute = isQuizEnd ? AppRoutes.end : AppRoutes.question;
      this.router.navigateByUrl(correctRoute);
    });
  }
}
