import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="title">Todos</h1>
          <div *ngIf="todoService.todos">
          <app-todo-form></app-todo-form>
          <app-todo-nav
          [statusNavArray]="statusNavArray"
          [presentStatus]="presentStatus"
          (changePresentStatus)="changePresentStatus($event)"></app-todo-nav>
          <app-todo-list [presentStatus]="presentStatus"></app-todo-list>
          <app-todo-footer></app-todo-footer>
          </div>
        </div>
      </div>
    </div>
  `
})

export class TodoComponent {
  statusNavArray: string[] = ['All', 'Active', 'Completed'];
  presentStatus: string = this.statusNavArray[0];

  constructor(public todoService: TodoService) { }

  changePresentStatus(status: string) {
    this.presentStatus = status;
  }
}
