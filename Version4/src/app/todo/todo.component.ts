import { Component } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  inputText: string;
  statusNavArray: string[] = ['All', 'Active', 'Completed'];
  presentStatus: string = this.statusNavArray[0];

  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: true },
  ];

  getMaxId() {
    return this.todos.length ? Math.max.apply('', this.todos.map(todo => todo.id)) + 1 : 1;
  }

  completedTodo() {
    return this.todos.filter(todo => todo.completed).length;
  }

  addTodo(content: string) {
    const newTodo = { id: this.getMaxId(), content, completed: false };
    this.todos = [newTodo, ...this.todos];
    this.inputText = '';
    console.log(this.inputText);
    console.log('[ADD TODO]');
  }

  AllCompleted() {
    if (this.completedTodo() !== this.todos.length) {
      this.todos.map(todo => todo.completed = true);
    } else {
      this.todos.map(todo => todo.completed = false);
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  changeCompleted(id: number) {
    this.todos.map(todo => { if (todo.id === id) { todo.completed = !todo.completed; } });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log('[REMOVE TODO]');
  }

  changePresentStatus(status: string) {
    this.presentStatus = status;
  }

}
