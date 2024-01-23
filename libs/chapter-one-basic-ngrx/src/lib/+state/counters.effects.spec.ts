import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CountersActions from './counters.actions';
import { CountersEffects } from './counters.effects';

describe('CountersEffects', () => {
  let actions: Observable<Action>;
  let effects: CountersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CountersEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CountersEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CountersActions.initCounters() });

      const expected = hot('-a-|', {
        a: CountersActions.loadCountersSuccess({ counters: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
