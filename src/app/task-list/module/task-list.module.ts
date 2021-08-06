import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskListComponent } from '../task-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [TaskListComponent],
  exports: [TaskListComponent]
})
export class TaskListModule { }
