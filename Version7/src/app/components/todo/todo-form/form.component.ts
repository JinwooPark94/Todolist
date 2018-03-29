import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../interface/todo.interface';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputText: string;

  constructor(private todoService: TodoService) { }

  keyupEvent() {
    if ( !this.inputText ) { return; }
    this.todoService.addTodo(this.inputText);
    this.inputText = '';
  }

}
