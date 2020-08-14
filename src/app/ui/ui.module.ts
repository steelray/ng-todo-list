import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  exports: [
    CommonModule,
    ComponentsModule,
    WidgetsModule
  ]
})
export class UiModule { }
