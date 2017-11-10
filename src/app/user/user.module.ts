import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '../../../node_modules/clarity-angular';

import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { LoginService } from './service/login.service';
import { AuthcheckRoutingService } from './login/authcheck-routing.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule
  ],
  declarations: [
    LoginComponent,
    RegisterFormComponent
  ],
  providers: [
    LoginService,
    AuthcheckRoutingService
  ]
})
export class UserModule { }
