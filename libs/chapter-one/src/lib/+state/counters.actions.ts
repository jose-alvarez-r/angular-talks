import { createAction, props } from '@ngrx/store';
import { CountersEntity } from './counters.models';

export const initCounters = createAction('[Counters Page] Init');

export const loadCountersSuccess = createAction(
  '[Counters/API] Load Counters Success',
  props<{ counters: CountersEntity[] }>()
);

export const loadCountersFailure = createAction(
  '[Counters/API] Load Counters Failure',
  props<{ error: any }>()
);
