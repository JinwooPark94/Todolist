import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../../interface/todo.interface';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() presentStatus: string;

  constructor(public todoservice: TodoService) {
    console.log(todoservice.todos);
  }

  removeId(id: number) {
    if (!id) { return; }
    this.todoservice.removeTodo(id);
  }

  changeSelectId(id: number) {
    if (!id) { return; }
    this.todoservice.changeCompleted(id);
  }

}
