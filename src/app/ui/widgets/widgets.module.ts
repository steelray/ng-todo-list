import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  TasksListComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: COMPONENTS
})
export class WidgetsModule { }
