import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { ListGenerator } from './services/tree-generator.service';
import { MatIconModule } from '@angular/material/icon';
import { NameInputComponent } from './components/name-input/name-input.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [EmployeeListComponent, NameInputComponent, ListComponent],
  exports: [EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [ListGenerator]
})
export class EmployeeListModule { }
