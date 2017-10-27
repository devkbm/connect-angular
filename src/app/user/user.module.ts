import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistFormComponent } from './regist-form/regist-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,    
    RegistFormComponent
]
})
export class UserModule { }
