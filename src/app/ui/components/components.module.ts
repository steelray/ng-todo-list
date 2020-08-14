import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  InputComponent,
  ButtonComponent,
  TextareaComponent,
  SelectComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: COMPONENTS
})
export class ComponentsModule { }
