import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COUNTERS_FEATURE_KEY,
  CountersState,
  countersAdapter,
} from './counters.reducer';

// Lookup the 'Counters' feature state managed by NgRx
export const selectCountersState =
  createFeatureSelector<CountersState>(COUNTERS_FEATURE_KEY);

const { selectAll, selectEntities } = countersAdapter.getSelectors();

export const selectTotal = createSelector(
  selectCountersState,
  (state: CountersState) => state.total
);

export const selectCountersLoaded = createSelector(
  selectCountersState,
  (state: CountersState) => state.loaded
);

export const selectCountersError = createSelector(
  selectCountersState,
  (state: CountersState) => state.error
);

export const selectAllCounters = createSelector(
  selectCountersState,
  (state: CountersState) => selectAll(state)
);

export const selectCountersEntities = createSelector(
  selectCountersState,
  (state: CountersState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCountersState,
  (state: CountersState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCountersEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
