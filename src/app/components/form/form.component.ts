import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Router } from '@angular/router';
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
  completedArr!: ITodo[];

  constructor(public todosService: TodosService, public router: Router) {}

  ngOnInit(): void {
    this.tasks = this.todosService.getTaskList();
    this.completedArr = this.todosService.getCompletedList();
  }

  addTask(): void {
    let taskId: number = this.tasks.length + 1;
    let obj = new Task(taskId, this.title, false);
    let load: any = document.querySelector('#loading');
    setTimeout(() => {
      this.todosService.addTask(obj);
      this.title = '';
      load.style.display = 'none';
    }, 2000);
/*     setTimeout(() => {
    }, 2000); */
    load.style.display = 'block';
  }
}
