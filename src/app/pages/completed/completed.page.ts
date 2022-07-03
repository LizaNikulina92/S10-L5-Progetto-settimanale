import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {

  completedArr!: ITodo[];

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.completedArr = this.todosService.getCompletedList();
  }

}
