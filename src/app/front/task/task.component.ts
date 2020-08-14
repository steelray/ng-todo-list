import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { TaskService } from '@core/service/task.service';
import { Observable } from 'rxjs';
import { ITask } from '@core/interface/task.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TASK_STATUS_LIST } from '@core/const/task-status-list.const';
import { tap, switchMap, takeUntil } from 'rxjs/operators';
import { NgOnDestroy } from '@core/service/destroy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TASK_STATUS } from '@core/enum/task-status.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy]
})
export class TaskComponent implements OnInit {
  task$: Observable<ITask>;
  statusControl = new FormControl();
  statusList = TASK_STATUS_LIST;
  taskId: number;
  constructor(
    private taskService: TaskService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    @Self() private onDestroy$: NgOnDestroy
  ) { }

  ngOnInit(): void {
    this.taskId = +this.activateRoute.snapshot.params.id;
    if (isNaN(this.taskId)) {
      this.router.navigate(['/']);
    } else {
      this.task$ = this.taskService.getTask(this.taskId).pipe(
        tap(task => this.statusControl.setValue(task.status))
      );
    }
  }

  onStatusChange(status: TASK_STATUS) {
    this.taskService.updateTaskStatus(this.taskId, status)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.snackbar.open('Статус изменен', 'Закрыть', {
        duration: 2000
      }));

  }

}
