import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateManagementService } from './state-management.service';

@Component({
  selector: 'lib-state-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css',
})
export class StateManagementComponent implements OnInit{
  stateService = inject(StateManagementService);
  ngOnInit() {
    this.stateService.changeState('ngOninit state !');
  }

  changeState(){
    this.stateService.changeState('new state on demand!');
  }
}
