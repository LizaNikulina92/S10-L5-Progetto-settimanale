import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-no-task',
  templateUrl: './no-task.component.html',
  styleUrls: ['./no-task.component.scss']
})
export class NoTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
