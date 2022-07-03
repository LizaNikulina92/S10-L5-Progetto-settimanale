import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public todosService: TodosService, public router: Router) {}

  ngOnInit(): void {
    this.tasks = this.todosService.getTaskList();
    this.completed = this.todosService.getCompletedList()
  }

  delTask(task: ITodo): void {
    this.todosService.removeTask(task);
  }
  changeValue(task: ITodo): void {
    this.todosService.changeValue(task);
  }
}
