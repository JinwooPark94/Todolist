import { Component } from '@angular/core';
import { Todo } from '../todo.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  statusNavArray: string[] = ['All', 'Active', 'Completed'];
  presentStatus: string = this.statusNavArray[0];
  url = environment.url;

  todos: Todo[] = [];

  constructor(public http: HttpClient) {
    this.getTodos();
  }

  getTodos() {
     this.http.get<Todo[]>(this.url)
       .subscribe(todos => this.todos = todos);
  }

  getMaxId() {
    return this.todos.length ? Math.max.apply('', this.todos.map(todo => todo.id)) + 1 : 1;
  }

  completedTodo() {
    return this.todos.filter(todo => todo.completed).length;
  }

  addTodo(content: string) {
    const newTodo = { id: this.getMaxId(), content, completed: false };
    this.http.post(this.url, newTodo)
      .subscribe(() => this.getTodos());
    console.log('[ADD TODO]');
  }

  AllCompleted() {
    let completed;

    (this.completedTodo() !== this.todos.length) ? completed = true : completed = false;

    this.http.patch(this.url, { completed }, { responseType: 'text' })
      .subscribe( () => this.getTodos() );
  }

  clearCompleted() {
    this.http.delete(`${this.url}/completed`, { responseType: 'text'})
      .subscribe( () => this.getTodos());
  }

  changeCompleted(id: number) {
    const completed = !this.todos.find(item => item.id === id).completed;
    this.http.patch(`${this.url}/id/${id}`, { completed }, { responseType: 'text' })
      .subscribe( () => this.getTodos());
  }

  removeTodo(id: number) {
    this.http.delete(`${this.url}/id/${id}`, { responseType: 'text' })
      .subscribe( () => this.todos =  this.todos.filter(todo => todo.id !== id ));
    console.log('[REMOVE TODO]');
  }

  changePresentStatus(status: string) {
    this.presentStatus = status;
  }
}
