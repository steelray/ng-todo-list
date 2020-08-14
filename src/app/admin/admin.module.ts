import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UiModule } from '@ui/ui.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [AdminComponent, TaskFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UiModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class AdminModule { }
