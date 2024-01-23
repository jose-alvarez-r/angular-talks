import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CountersActions from './counters.actions';
import { CountersEntity } from './counters.models';

export const COUNTERS_FEATURE_KEY = 'counters';

export interface CountersState extends EntityState<CountersEntity> {
  selectedId?: string | number; // which Counters record has been selected
  loaded: boolean; // has the Counters list been loaded
  error?: string | null; // last known error (if any)

  total: number;
}

export interface CountersPartialState {
  readonly [COUNTERS_FEATURE_KEY]: CountersState;
}

export const countersAdapter: EntityAdapter<CountersEntity> =
  createEntityAdapter<CountersEntity>();

export const initialCountersState: CountersState =
  countersAdapter.getInitialState({
    // set initial required properties
    loaded: false,
    total: 0,
  });

const reducer = createReducer(
  initialCountersState,
  on(CountersActions.initCounters, (state) => ({
    ...state,
    loaded: false,
    error: null,
    total: 0,
  })),
  on(CountersActions.loadCountersSuccess, (state, { counters }) =>
    countersAdapter.setAll(counters, {
      ...state,
      loaded: true,
      total: counters.reduce((sum, x) => sum + x.total, 0),
    })
  ),
  on(CountersActions.takeOneCounterSuccess, (state, { counter }) =>
    countersAdapter.addOne(counter, {
      ...state,
      loaded: true,
      total: state.total + counter.total,
    })
  ),
  on(CountersActions.loadCountersFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(CountersActions.addOne, (state) => ({
    ...state,
    total: state.total + 1,
  }))
);

export function countersReducer(
  state: CountersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
