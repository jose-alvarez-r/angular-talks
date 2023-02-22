import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CountersActions from './counters.actions';
import * as CountersFeature from './counters.reducer';

import { switchMap, catchError, of } from 'rxjs';
import { CountersEntity } from "@angular-chapters/chapter-one";

@Injectable()
export class CountersEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountersActions.initCounters),
      switchMap(() =>
        of(CountersActions.loadCountersSuccess({ counters: [{id: 'new counter', name:'another'} as CountersEntity] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CountersActions.loadCountersFailure({ error }));
      })
    )
  );

  newCall$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountersActions.loadNewCountersFromDatabase),
      switchMap(() =>
        of(CountersActions.loadCountersSuccess({ counters: [
          {name: 'new counter 1', id:'1', total: 5} as CountersEntity,
          {name: 'new counter 2', id:'2', total: 5} as CountersEntity,
          {name: 'new counter 3', id:'3', total: 5} as CountersEntity,
          {name: 'new counter 4', id:'4', total: 5} as CountersEntity,
          ] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CountersActions.loadCountersFailure({ error }));
      })
    )
  );

  takeOneCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountersActions.takeOneCounter),
      switchMap(() =>
        of(CountersActions.takeOneCounterSuccess({ counter:             {name: 'new counter 8', id:'8', total: 88} as CountersEntity,
        }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CountersActions.loadCountersFailure({ error }));
      })
    )
  );
}
