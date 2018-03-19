import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() todos: Todo[];
  @Input() inputText: string;

  constructor() { }

  @Output() addTodo = new EventEmitter<string>();
}
