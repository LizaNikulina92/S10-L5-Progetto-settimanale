import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  tasks!: ITodo[];

  constructor(public todosService:TodosService ) {}
  ngOnInit(): void {
    this.tasks = this.todosService.getTaskList();
  }

}

