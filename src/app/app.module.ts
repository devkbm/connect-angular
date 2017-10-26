import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonLayoutModule } from "./common-layout/common-layout.module";
import { TestModule } from './test/test.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    CommonLayoutModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
