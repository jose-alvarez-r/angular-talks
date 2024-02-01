import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'battle-simulator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './battle-simulator.component.html',
  styleUrl: './battle-simulator.component.scss'
})
export class BattleSimulatorComponent {

  heroList = heroes;
  villainList = villains;

  $selectedHero = signal(heroes[0]);
  $selectedVillain = signal(villains[0]);

  $winner = computed(() => {
    if (this.$selectedHero().power > this.$selectedVillain().power) {
      return this.$selectedHero();
    }
    return this.$selectedVillain();
  });
  showWinner = false;
  constructor() {
    effect(() => {
      console.log('the winner is ' + this.$winner().name);
    });
  }

  changeSelectedHero(heroName: string) {
    this.$selectedHero.set(this.heroList.find(x => x.name === heroName) as Warrior);

  }

  changeSelectedVillain(villainName: string) {
    this.$selectedVillain.set(this.villainList.find(x => x.name === villainName) as Warrior);
  }

  powerUpHero() {
    this.$selectedHero.update(hero => {
      {
        return { ...hero, power: hero.power + 10 };
      }
    });
  }

  powerUpVillain() {
    this.$selectedVillain.update(villain => {
      {
        return { ...villain, power: villain.power + 10 };
      }
    });
  }
}


interface Warrior {
  name: string,
  power: number
}

const heroes: Warrior[] = [
  {
    name: 'Goku',
    power: 100
  },
  {
    name: 'Krilin',
    power: 50
  },
  {
    name: 'Yamscha',
    power: 9
  },
  {
    name: 'Son Gohan',
    power: 80
  }

];

const villains: Warrior[] = [
  {
    name: 'Piccolo',
    power: 10
  },
  {
    name: 'Freezer',
    power: 100
  },
  {
    name: 'Cell',
    power: 120
  },
  {
    name: 'Majin Boo',
    power: 150
  }

];

