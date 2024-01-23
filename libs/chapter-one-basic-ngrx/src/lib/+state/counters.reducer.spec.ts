import { Action } from '@ngrx/store';

import * as CountersActions from './counters.actions';
import { CountersEntity } from './counters.models';
import {
  CountersState,
  initialCountersState,
  countersReducer,
} from './counters.reducer';

describe('Counters Reducer', () => {
  const createCountersEntity = (id: string, name = ''): CountersEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Counters actions', () => {
    it('loadCountersSuccess should return the list of known Counters', () => {
      const counters = [
        createCountersEntity('PRODUCT-AAA'),
        createCountersEntity('PRODUCT-zzz'),
      ];
      const action = CountersActions.loadCountersSuccess({ counters });

      const result: CountersState = countersReducer(
        initialCountersState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = countersReducer(initialCountersState, action);

      expect(result).toBe(initialCountersState);
    });
  });
});
