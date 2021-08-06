import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TaskListModule } from './task-list/module/task-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TaskListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
