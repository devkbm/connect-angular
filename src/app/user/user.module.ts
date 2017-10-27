import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistFormComponent } from './regist-form/regist-form.component';

import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,    
    RegistFormComponent
  ],
  providers: [
    LoginService
  ]
})
export class UserModule { }
