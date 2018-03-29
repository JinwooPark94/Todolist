import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Todo } from '../interface/todo.interface';

@Injectable()
export class TodoService {

  todos: Todo[];

  url = environment.url;

  constructor(private http: HttpClient) {
    this.getTodos();
  }

  getTodos() {
     this.http.get<Todo[]>(this.url)
       .subscribe(todos => {
         this.todos = todos;
         console.log(this.todos);
      });
  }

  getMaxId() {
    return this.todos.length ? Math.max.apply('', this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo(content: string) {
    const newTodo = { id: this.getMaxId(), content, completed: false };
    this.http.post(this.url, newTodo)
      .subscribe(() => this.getTodos());
    console.log('[ADD TODO]');
  }

   completedTodo() {
    return this.todos.filter(todo => todo.completed).length;
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

}
