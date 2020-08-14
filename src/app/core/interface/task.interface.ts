import { TASK_STATUS } from '@core/enum/task-status.enum';

export interface ITask {
  title: string;
  description: string;
  status: TASK_STATUS;
  id?: number;
}
