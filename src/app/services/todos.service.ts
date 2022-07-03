import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private taskList: ITodo[] = [];

  constructor() {}

  getTaskList(): ITodo[] {
    return this.taskList;
  }
  removeTask(task: ITodo): void {
    let index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }
  addTask(task: ITodo):void{
    this.taskList.push(task);
  }
}
