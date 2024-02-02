import { computed, Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
  // Initial state
  private readonly _state = signal<State>({
    stateProp: 'initial state',
    isLoaded: false
  });

  // selectors
  readonly $stateProp= computed(() => this._state().stateProp);
  readonly $isLoaded= computed(() => this._state().isLoaded);

  // sources
  private _changeState$ = new Subject<string>();


  //actions
  changeState(stateProp: string) {
    this._changeState$.next(stateProp);
  }

  constructor() {
    // Reducers
    this._changeState$.subscribe((stateProp:string) => {
      this._state.update(state => {
        return { ...state, stateProp, isLoaded: true};
      });
    });
  }
  effect() {
    // effects
    console.log('State changed', this._state());
  }
}

interface State {
  stateProp: string;
  isLoaded: boolean;
}
