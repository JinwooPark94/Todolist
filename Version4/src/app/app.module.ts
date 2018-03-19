import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodosfilterPipe } from './todosfilter.pipe';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { InputComponent } from './input/input.component';
import { StatusComponent } from './status/status.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosfilterPipe,
    ListComponent,
    TodoComponent,
    InputComponent,
    StatusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
