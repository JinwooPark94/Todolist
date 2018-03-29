import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutesModule } from './routes/todo-routes.module';

import { TodosfilterPipe } from '../pipes/todosfilter.pipe';
import { TodoService } from '../services/todo.service';

import { FormComponent } from '../components/todo/todo-form/form.component';
import { NavComponent } from '../components/todo/todo-nav/nav.component';
import { ListComponent } from '../components/todo/todo-list/list.component';
import { FooterComponent } from '../components/todo/todo-footer/footer.component';
import { TodoComponent } from '../components/todo/todo.component';

@NgModule({
  declarations: [
    ListComponent,
    TodoComponent,
    FooterComponent,
    FormComponent,
    NavComponent,
    TodosfilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutesModule
  ],
  providers: [
    TodoService
  ],
  exports: [
    ListComponent,
    TodoComponent,
    FooterComponent,
    FormComponent,
    NavComponent
  ]
})
export class TodoModule { }
