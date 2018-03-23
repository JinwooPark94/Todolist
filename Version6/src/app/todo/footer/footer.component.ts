import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo.interface';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  @Input() todos: Todo;
  @Input() completedTodo: number;

  @Output() AllCompleted = new EventEmitter<any>();
  @Output() clearCompleted = new EventEmitter<any>();

  constructor() { }
}
