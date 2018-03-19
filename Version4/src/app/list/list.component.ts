import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() todos: Todo[];
  @Input() presentStatus: string;

  constructor() { }

  @Output() removeTodo = new EventEmitter<Todo>();
  @Output() changeCompleted = new EventEmitter<Todo>();
}
