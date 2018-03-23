import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosfilterPipe } from './todosfilter.pipe';
import { ListComponent } from './todo/list/list.component';
import { TodoComponent } from './todo/todo.component';
import { FooterComponent } from './todo/footer/footer.component';
import { FormComponent } from './todo/form/form.component';
import { NavComponent } from './todo/nav/nav.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { MenuNaviComponent } from './menu-navi/navi/menu-navi.component';
import { HeaderComponent } from './menu-navi/navi/header.component';
import { NaviComponent } from './menu-navi/navi.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosfilterPipe,
    ListComponent,
    TodoComponent,
    FooterComponent,
    FormComponent,
    NavComponent,
    TooltipComponent,
    TooltipDirective,
    MenuNaviComponent,
    HeaderComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
