import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '../../../node_modules/clarity-angular';

import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './component/user-form.component';
import { UserGridComponent } from './component/user-grid.component';

import { LoginService } from './service/login.service';
import { AuthcheckRoutingService } from './login/authcheck-routing.service';
import { UserService } from './service/user.service';
import { AppAlarmService } from '../common-layout/app-alarm.service';
import { AuthorityGridComponent } from './component/authority-grid.component';
import { AuthorityFormComponent } from './component/authority-form.component';
import { AuthoritySelectboxesComponent } from './component/authority-selectboxes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule
  ],
  declarations: [
    LoginComponent,
    UserFormComponent,
    UserGridComponent,
    AuthorityGridComponent,
    AuthorityFormComponent,
    AuthoritySelectboxesComponent
  ],
  providers: [
    LoginService,
    UserService,
    AuthcheckRoutingService,
    AppAlarmService
  ]
})
export class UserModule { }
