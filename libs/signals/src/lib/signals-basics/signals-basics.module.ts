import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignalsBasicsComponent } from './signals-basics.component';


@NgModule({
  declarations: [SignalsBasicsComponent],
  exports: [SignalsBasicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SignalsBasicsComponent }])
  ]
})
export class SignalsBasicsModule {
}
