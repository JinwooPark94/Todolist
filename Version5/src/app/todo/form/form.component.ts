import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputText: string;
  @Input() todos: Todo[];
  @Output() addTodo = new EventEmitter<string>();

  constructor() { }

  keyupEvent() {
    if ( !this.inputText ) { return; }
    this.addTodo.emit( this.inputText );
    this.inputText = '';
  }

}
