// Common Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Login Routes Module
import { LoginRoutesModule } from './routes/login-routes.module';

// Login Component
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutesModule
  ],
  exports: [LoginComponent]
})

export class LoginModule { }
