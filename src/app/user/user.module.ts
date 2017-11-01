import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistFormComponent } from './regist-form/regist-form.component';

import { LoginService } from './login/login.service';
import { AuthcheckRoutingService } from './login/authcheck-routing.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,    
    RegistFormComponent
  ],
  providers: [
    LoginService,
    AuthcheckRoutingService
  ]
})
export class UserModule { }
