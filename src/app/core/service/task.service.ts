import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ITask } from '@core/interface/task.interface';
import { TASK_STATUS } from '@core/enum/task-status.enum';

const taskStorageKey = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnDestroy {
  tasks$: Observable<ITask[]>;
  private tasksSubject = new BehaviorSubject<ITask[]>([]);

  constructor() {
    this.tasks$ = this.tasksSubject.asObservable();
    this.updateTasksSubject(this.getTasks());
  }

  addTask(task: ITask): Observable<ITask> {
    const tasks = this.getTasks();
    const newId = tasks.reduce((prev, curr) => prev + curr.id, 1);
    console.log(tasks, newId);
    task.id = newId;
    tasks.push(task);
    this.updateTasksSubject(tasks);
    return of(task);
  }

  removeTask(id: number) {
    const tasks = this.getTasks().filter(task => task.id !== id);
    this.updateTasksSubject(tasks);
  }

  updateTaskStatus(id: number, status: TASK_STATUS): Observable<boolean> {
    const tasks = this.getTasks().map(task => {
      if (task.id === id) {
        task.status = status;
      }
      return task;
    });
    this.updateTasksSubject(tasks);
    return of(true);
  }

  getTask(id: number): Observable<ITask> {
    return of(
      this.getTasks().find(task => task.id === id)
    );
  }


  private updateTasksSubject(tasks: ITask[]) {
    this.tasksSubject.next(tasks);
    localStorage.setItem(taskStorageKey, JSON.stringify(tasks));
  }


  private getTasks(): ITask[] {
    const tasks = localStorage.getItem(taskStorageKey);
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }



  ngOnDestroy(): void {
    this.tasksSubject.complete();
  }

}

