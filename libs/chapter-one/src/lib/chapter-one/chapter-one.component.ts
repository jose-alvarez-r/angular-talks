import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from "@ngrx/store";
import { CountersState } from '../+state/counters.reducer';
import { Observable } from "rxjs";
import * as CounterActions from '../+state/counters.actions';
import * as CounterSelector from '../+state/counters.selectors';
import { selectTotal } from "../+state/counters.selectors";

@Component({
  selector: 'angular-chapters-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChapterOneComponent implements OnInit{
  counter: Observable<number> | undefined;

  constructor(public store: Store<CountersState>) {
  }

  ngOnInit(): void {
    this.counter = this.store.select(CounterSelector.selectTotal);
  }

  add() {
    this.store.dispatch(CounterActions.addOne());
  }
}
