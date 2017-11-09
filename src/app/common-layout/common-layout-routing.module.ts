import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonLayoutComponent } from './common-layout.component';
import { TestComponent } from '../test/test/test.component';
import { Test2Component } from '../test/test2/test2.component';
import { RegisterFormComponent } from '../user/register-form/register-form.component';

const layoutroutes: Routes = [
  {
    path: 'home', component: CommonLayoutComponent,
    children: [
      {path: 'test', component: TestComponent},
      {path: 'test2', component: Test2Component},
      {path: 'regform', component: RegisterFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(layoutroutes)],
  exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
