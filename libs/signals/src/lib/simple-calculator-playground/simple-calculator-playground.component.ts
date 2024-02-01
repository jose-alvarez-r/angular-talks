import { ChangeDetectionStrategy, Component, computed, effect, signal, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'simple-calculator-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-calculator-playground.component.html',
  styleUrl: './simple-calculator-playground.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCalculatorPlaygroundComponent {
  $a = signal<number>(0);
  $b = signal<number>(0);
  $z = computed(() => this.$a() + this.$b());
  $x = signal<number>(0)
  flickerFreeBehaviourSubject = new BehaviorSubject<number>(0);
  constructor() {
    effect  (() => {
      console.log(`New Result ${this.$z()}`);
    });

    effect  (() => {
      console.log(`Untrack example a=${untracked(this.$a)} b=${this.$b()}`);
    });
  }

  aChanged($event: number) {
    this.$a.set(Number($event));
  }
  bChanged($event: number) {
    this.$b.set(Number($event));
  }

  flickerTestLimit= 100000000;

  flickerFree(){
    let i = 0;
    while (i<this.flickerTestLimit){
      i++;
      this.$x.update(x => x + 1);
    }

  }

  flickerFreeSubject(){
    let i = 0;
    while (i<this.flickerTestLimit){
      i++;
      this.flickerFreeBehaviourSubject.next(this.flickerFreeBehaviourSubject.value + 1);
    }

  }
}
