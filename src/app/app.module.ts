import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListModule } from './employee-list/employee-list.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EmployeeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
