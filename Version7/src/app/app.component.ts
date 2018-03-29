import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul class="nav nav-tabs">
      <li role="presentation"><a routerLink="todos" routerLinkActive="active">Home</a></li>
      <li role="presentation"><a routerLink="login" routerLinkActive="active">login</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {}
