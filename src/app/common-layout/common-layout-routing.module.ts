import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from '../test/test/test.component';
import { Test2Component } from '../test/test2/test2.component';
import { LoginComponent } from '../user/login/login.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'test2', component: Test2Component},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
