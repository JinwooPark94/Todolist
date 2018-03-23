import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() todos: Todo;
  @Input() presentStatus: string;

  @Output() removeTodo = new EventEmitter<number>();
  @Output() changeCompleted = new EventEmitter<number>();

  constructor() { }

  removeId(id: number) {
    if (!id) { return; }
    this.removeTodo.emit(id);
  }

  changeSelectId(id: number) {
    if (!id) { return; }
    this.changeCompleted.emit(id);
  }

}
