import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INPUT_TYPES } from '@core/enum/input-types.enum';

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field [class]="class">
      <mat-label>{{label}}</mat-label>
      <input matInput [type]="type" [formControl]="control">
      <mat-error *ngIf="control.hasError('required')">обязательное поле для заполнения</mat-error>
      <ng-content></ng-content>
    </mat-form-field>
  `,
  styles: [
    `
      .default-input {
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() type: INPUT_TYPES = INPUT_TYPES.TEXT;
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() class = 'default-input';
}
