import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  @Input() todos: Todo[];
  @Input() completedTodo: number;

  constructor() { }

  //@Output() allCompleted = new EventEmitter<>;
  //@Output() clearCompleted = new EventEmitter<>;

}
