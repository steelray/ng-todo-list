import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '@core/interface/task.interface';
import { TASKS_STATUS_OBJ } from '@core/const/task-status-list.const';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class TasksListComponent {
  @Input() tasks: ITask[];
  @Output() removeTask = new EventEmitter<number>();
  taskStatusObject = TASKS_STATUS_OBJ;

  trackByFn(index, item) {
    return index;
  }

  onRemove(id: number): void {
    this.removeTask.emit(id);
  }

}
