import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  tasks!: ITodo[];

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
    this.tasks = this.todosService.getTaskList();
  }

  delTask(task: ITodo): void{
    this.todosService.removeTask(task);
  }

}
