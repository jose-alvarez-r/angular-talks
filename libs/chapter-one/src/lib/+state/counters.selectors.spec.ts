import { CountersEntity } from './counters.models';
import {
  countersAdapter,
  CountersPartialState,
  initialCountersState,
} from './counters.reducer';
import * as CountersSelectors from './counters.selectors';

describe('Counters Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCountersId = (it: CountersEntity) => it.id;
  const createCountersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CountersEntity);

  let state: CountersPartialState;

  beforeEach(() => {
    state = {
      counters: countersAdapter.setAll(
        [
          createCountersEntity('PRODUCT-AAA'),
          createCountersEntity('PRODUCT-BBB'),
          createCountersEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCountersState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Counters Selectors', () => {
    it('selectAllCounters() should return the list of Counters', () => {
      const results = CountersSelectors.selectAllCounters(state);
      const selId = getCountersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CountersSelectors.selectEntity(state) as CountersEntity;
      const selId = getCountersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCountersLoaded() should return the current "loaded" status', () => {
      const result = CountersSelectors.selectCountersLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCountersError() should return the current "error" state', () => {
      const result = CountersSelectors.selectCountersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
