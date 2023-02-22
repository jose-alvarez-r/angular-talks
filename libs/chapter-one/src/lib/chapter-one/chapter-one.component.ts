import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from "@ngrx/store";
import { CountersState } from '../+state/counters.reducer';
import { Observable } from "rxjs";
import * as CounterActions from '../+state/counters.actions';
import * as CounterSelector from '../+state/counters.selectors';
import { selectTotal } from "../+state/counters.selectors";
import { CountersEntity } from "@angular-chapters/chapter-one";
import { takeOneCounterSuccess } from "../+state/counters.actions";

@Component({
  selector: 'angular-chapters-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChapterOneComponent implements OnInit{
  counter: Observable<number> | undefined;
  counters: Observable<CountersEntity[]> | undefined;

  constructor(public store: Store<CountersState>) {
  }

  ngOnInit(): void {
    this.counter = this.store.select(CounterSelector.selectTotal);
    // this.store.dispatch(CounterActions.initCounters());
    this.counters = this.store.select(CounterSelector.selectAllCounters);
  }

  add() {
    this.store.dispatch(CounterActions.addOne());
  }

  loadNewCountersFromDatabase() {
    this.store.dispatch(CounterActions.loadNewCountersFromDatabase());

  }

  reset() {
    this.store.dispatch(CounterActions.initCounters());
  }


  addOneMoreFromApi() {
    this.store.dispatch(CounterActions.takeOneCounter());
  }
}
