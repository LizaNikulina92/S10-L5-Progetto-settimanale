import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private taskList: ITodo[] = [];
  private completedArr: ITodo[] = [];

  constructor() {}

  getTaskList(): ITodo[] {
    return this.taskList;
  }
  getCompletedList(): ITodo[] {
    return this.completedArr;
  }
  removeTask(task: ITodo): void {
    if (task.completed === false) {
      let index = this.taskList.indexOf(task);
      this.taskList.splice(index, 1);
    } else if (task.completed === true) {
      let index = this.completedArr.indexOf(task);
      this.completedArr.splice(index, 1);
    }
  }
  addTask(task: ITodo): void {
    this.taskList.push(task);
  }
  changeValue(task: ITodo): void {
    task.completed = !task.completed;
    if (task.completed === true) {
      let index = this.taskList.indexOf(task);
      this.completedArr.push(task);
      this.taskList.splice(index, 1);
    } else if (task.completed === false) {
      let index = this.completedArr.indexOf(task);
      this.taskList.push(task);
      this.completedArr.splice(index, 1);
    }
  }
}
