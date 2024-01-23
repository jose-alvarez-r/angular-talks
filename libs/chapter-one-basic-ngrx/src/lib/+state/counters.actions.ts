import { createAction, props } from '@ngrx/store';
import { CountersEntity } from './counters.models';

export const takeOneCounterSuccess = createAction(
  '[Counters/API] Take One Counter Success',
  props<{ counter: CountersEntity }>()
);

export const takeOneCounter = createAction(
  '[Counters Page] Ey! I want one more counter from API'
);
export const reset = createAction('[Counters Page] reset');
export const loadNewCountersFromDatabase = createAction(
  '[Counters Page] loadNewCountersFromDatabase'
);

export const addOne = createAction('[Counters Page] Add');

export const initCounters = createAction('[Counters Page] Init');

export const loadCountersSuccess = createAction(
  '[Counters/API] Load Counters Success',
  props<{ counters: CountersEntity[] }>()
);

export const loadCountersFailure = createAction(
  '[Counters/API] Load Counters Failure',
  props<{ error: any }>()
);
