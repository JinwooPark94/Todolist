// Common Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Login Component
import { LoginComponent } from '../../components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutesModule { }
