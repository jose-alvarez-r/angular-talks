import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCounters from './+state/counters.reducer';
import { CountersEffects } from './+state/counters.effects';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCounters.COUNTERS_FEATURE_KEY,
      fromCounters.countersReducer
    ),
    EffectsModule.forFeature([CountersEffects]),
  ],
  declarations: [
    ChapterOneComponent
  ],
  exports: [
    ChapterOneComponent
  ]
})
export class ChapterOneModule {}
