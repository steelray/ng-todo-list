import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ISelectOptions } from '@core/interface/select-options.initerface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field [class]="class">
      <mat-label>{{label}}</mat-label>
      <mat-select (selectionChange)="onSelect($event.value)" [formControl]="control">
        <mat-option *ngFor="let option of options" [value]="option.value">{{option.title}}</mat-option>
      </mat-select>
      <mat-error *ngIf="control.hasError('required')">обязательное поле для заполнения</mat-error>
      <ng-content></ng-content>
    </mat-form-field>
  `,
  styles: [
    `
      .default-select {
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() label: string;
  @Input() options: ISelectOptions[];
  @Input() control: FormControl = new FormControl();
  @Input() class = 'default-select';
  @Output() selected = new EventEmitter();

  onSelect(value: string | number) {
    this.selected.emit(value);
  }

}
