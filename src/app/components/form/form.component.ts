import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Task } from 'src/app/classes/task';
import { ITodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  id!: number;
  title!: string;
  completed!: boolean;
  tasks!: ITodo[];


  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.tasks = this.todosService.getTaskList();
    console.log(this.tasks)
  }

  addTask(): void {
    let taskId: number = this.tasks.length+1;
    let obj = new Task(taskId, this.title, false);
    this.todosService.addTask(obj);
    this.title = '';
    console.log(obj);
  }
}
