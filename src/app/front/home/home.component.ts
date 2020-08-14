import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '@core/interface/task.interface';
import { TaskService } from '@core/service/task.service';
import { MAT_BUTTON_TYPE, MAT_BUTTON_COLOR } from '@core/enum/mat-button.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  buttonTypes = MAT_BUTTON_TYPE;
  buttonColors = MAT_BUTTON_COLOR;
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
