import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '@core/interface/task.interface';
import { TaskService } from '@core/service/task.service';

@Component({
  selector: 'app-admin',
  template: `
    <header class="header">Добро пожаловать в админку</header>
    <div class="container">
      <div class="panel">
        <header class="panel-header">
          <h2 class="panel-title">Новая задача</h2>
        </header>
        <div class="panel-content">
          <app-task-form></app-task-form>
        </div>
      </div>
      <div class="panel">
        <header class="panel-header">
          <h2 class="panel-title">Список задач</h2>
        </header>
        <div class="panel-content">
          <app-tasks-list [tasks]="tasks$ | async" (removeTask)="onRemoveTask($event)"></app-tasks-list>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .header {
        background: #1c1c1c;
        color: #fff;
        text-align: center;
        padding: 15px;
      }
      .panel {
        margin: 50px 0;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  tasks$: Observable<ITask[]>;
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$;
  }

  onRemoveTask(id: number) {
    this.taskService.removeTask(id);
  }

}
