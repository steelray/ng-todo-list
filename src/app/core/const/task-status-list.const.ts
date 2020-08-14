import { ISelectOptions } from '@core/interface/select-options.initerface';
import { TASK_STATUS } from '@core/enum/task-status.enum';

export const TASKS_STATUS_OBJ = {
  [TASK_STATUS.IN_PROGRESS]: 'В процессе',
  [TASK_STATUS.DONE]: 'Завершен'
};

export const TASK_STATUS_LIST: ISelectOptions[] = Object.keys(TASKS_STATUS_OBJ).map(key => {
  return { value: key, title: TASKS_STATUS_OBJ[key] };
});
