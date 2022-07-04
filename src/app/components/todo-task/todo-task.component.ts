import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/classes/task';
import { ITodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss'],
})
export class TodoTaskComponent implements OnInit {
  tasks!: ITodo[];
  completed!: ITodo[];
  title!: string;

  constructor(public todosService: TodosService, public router: Router) {}

  ngOnInit(): void {
    this.tasks = this.todosService.getTaskList();
    this.completed = this.todosService.getCompletedList();
  }

  delTask(task: ITodo): void {
    let ul: any = document.querySelectorAll('ul');
    let load: any = document.querySelector('.hide');
    setTimeout(() => {
      ul.forEach((element: { style: { display: string } }) => {
        element.style.display = 'none';
        load.style.display = 'block';
      }, 2000);
    });
    setTimeout(() => {
      this.todosService.removeTask(task);
      ul.forEach((element: { style: { display: string } }) => {
        element.style.display = 'block';
        load.style.display = 'none';
      });
    }, 2000);
  }

  changeValue(task: ITodo): void {
    let ul: any = document.querySelectorAll('ul');
    let load: any = document.querySelector('.hide');
    setTimeout(() => {
      ul.forEach((element: { style: { display: string } }) => {
        element.style.display = 'none';
        load.style.display = 'block';
      }, 2000);
    });
    setTimeout(() => {
      this.todosService.changeValue(task);
      ul.forEach((element: { style: { display: string } }) => {
        element.style.display = 'block';
        load.style.display = 'none';
      });
    }, 2000);
  }
  modifyTask(task: ITodo): void {
    let ul: any = document.querySelectorAll('ul');
    let load: any = document.querySelector('.hide');
    setTimeout(() => {
      ul.forEach((element: { style: { display: string } }) => {
        element.style.display = 'none';
        load.style.display = 'block';
      }, 2000);
    });
    setTimeout(() => {
      this.todosService.modifyTask(task);
      ul.forEach((element: { style: { display: string } }) => {
        element.style.display = 'block';
        load.style.display = 'none';
      });
    }, 2000);
  }

}
