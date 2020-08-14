import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { INPUT_TYPES } from '@core/enum/input-types.enum';
import { MAT_BUTTON_TYPE, MAT_BUTTON_COLOR } from '@core/enum/mat-button.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TASK_STATUS_LIST } from '@core/const/task-status-list.const';
import { TaskService } from '@core/service/task.service';
import { NgOnDestroy } from '@core/service/destroy.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy]
})
export class TaskFormComponent implements OnInit {
  inputTypes = INPUT_TYPES;
  buttonTypes = MAT_BUTTON_TYPE;
  buttonColors = MAT_BUTTON_COLOR;
  taskStatusList = TASK_STATUS_LIST;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private taskService: TaskService,
    @Self() private onDestroy$: NgOnDestroy
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    const { title, status, description } = this.form.value;
    console.log(title);
    this.taskService.addTask({ title, status, description })
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(res => this.snackbar.open('Задача успешно добавлена', 'Закрыть', {
        duration: 2000
      }));
  }
}
