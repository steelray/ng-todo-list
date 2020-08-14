import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <mat-form-field [class]="class">
      <mat-label>{{label}}</mat-label>
      <textarea matInput [placeholder]="placeholder" [formControl]="control"></textarea>
      <mat-error *ngIf="control.hasError('required')">обязательное поле для заполнения</mat-error>
      <ng-content></ng-content>
    </mat-form-field>
  `,
  styles: [
    `
      .default-textarea {
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() placeholder: string;
  @Input() class = 'default-textarea';

}
