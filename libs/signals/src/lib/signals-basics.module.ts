import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignalsBasicsComponent } from './signals-basics.component';
import { FormsModule } from '@angular/forms';
import { BattleSimulatorComponent } from './battle-simulator/battle-simulator.component';
import {
  SimpleCalculatorPlaygroundComponent
} from './simple-calculator-playground/simple-calculator-playground.component';


@NgModule({
  declarations: [SignalsBasicsComponent],
  exports: [SignalsBasicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SignalsBasicsComponent }]),
    FormsModule,
    BattleSimulatorComponent,
    SimpleCalculatorPlaygroundComponent
  ]
})
export class SignalsBasicsModule {
}
