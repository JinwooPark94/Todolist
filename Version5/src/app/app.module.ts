import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodosfilterPipe } from './todosfilter.pipe';
import { ListComponent } from './todo/list/list.component';
import { TodoComponent } from './todo/todo.component';
import { FooterComponent } from './todo/footer/footer.component';
import { FormComponent } from './todo/form/form.component';
import { NavComponent } from './todo/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosfilterPipe,
    ListComponent,
    TodoComponent,
    FooterComponent,
    FormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
