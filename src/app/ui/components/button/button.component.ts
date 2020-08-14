import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MAT_BUTTON_COLOR, MAT_BUTTON_TYPE } from '@core/enum/mat-button.enum';

@Component({
  selector: 'app-button',
  template: `
    <ng-container [ngSwitch]="type">
      <button [type]="btnType" [class]="class" mat-raised-button [color]="color" type="button" *ngSwitchCase="types.RAISED">
        {{text}}
      </button>
      <button [type]="btnType" [class]="class" mat-stroked-button [color]="color" type="button" *ngSwitchCase="types.STROKED">
        {{text}}
      </button>
      <button [type]="btnType" [class]="class" mat-flat-button [color]="color" type="button" *ngSwitchCase="types.FLAT">
        {{text}}
      </button>
      <button [type]="btnType" [class]="class" mat-icon-button [color]="color" type="button" *ngSwitchCase="types.ICON">
        {{text}}
      </button>
      <button [type]="btnType" [class]="class" mat-button [color]="color" type="button" *ngSwitchDefault>
        {{text}}
      </button>
    </ng-container>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() color: MAT_BUTTON_COLOR = MAT_BUTTON_COLOR.PRIMARY;
  @Input() type: MAT_BUTTON_TYPE = MAT_BUTTON_TYPE.FLAT;
  @Input() text: string;
  @Input() class: string;
  @Input() btnType: 'submit' | 'button' = 'button';
  types = MAT_BUTTON_TYPE;
}
