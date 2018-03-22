import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() statusNavArray: string[];
  @Input() presentStatus: string[];

  @Output() changePresentStatus = new EventEmitter<string>();

  constructor() { }

}
