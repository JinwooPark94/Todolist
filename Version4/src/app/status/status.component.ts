import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})

export class StatusComponent {
  @Input() presentStatus: string;
  @Input() statusNavArray: string[];

  constructor() { }

  @Output() changePresentStatus = new EventEmitter<string>();
}
