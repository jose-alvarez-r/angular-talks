import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CountersActions from './counters.actions';
import * as CountersFeature from './counters.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class CountersEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountersActions.initCounters),
      switchMap(() =>
        of(CountersActions.loadCountersSuccess({ counters: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CountersActions.loadCountersFailure({ error }));
      })
    )
  );
}
