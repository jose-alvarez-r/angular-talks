import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CountersActions from './counters.actions';

import { switchMap, catchError, of } from 'rxjs';
import { CountersEntity } from './counters.models';

@Injectable()
export class CountersEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountersActions.initCounters),
      switchMap(() =>
        of(CountersActions.loadCountersSuccess({counters: []}))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CountersActions.loadCountersFailure({error}));
      })
    )
  );

  newCall$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountersActions.loadNewCountersFromDatabase),
      switchMap(() =>
        of(CountersActions.loadCountersSuccess({
          counters: [
            {name: 'new counter 1', id: '1', total: 5} as CountersEntity,
            {name: 'new counter 2', id: '2', total: 5} as CountersEntity,
            {name: 'new counter 3', id: '3', total: 5} as CountersEntity,
            {name: 'new counter 4', id: '4', total: 5} as CountersEntity,
          ]
        }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CountersActions.loadCountersFailure({error}));
      })
    )
  );

  takeOneCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountersActions.takeOneCounter),
      switchMap(() =>
        of(CountersActions.takeOneCounterSuccess({
          counter: {name: 'new counter random id', id: randomIntFromInterval(10, 100), total: 80} as CountersEntity,
        }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CountersActions.loadCountersFailure({error}));
      })
    )
  );
}



export function randomIntFromInterval(min:number, max:number) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
