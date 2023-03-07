import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.load();
  }


  load() {
    this.todoService.getAll().subscribe(x => this.todoList = x);
  }

  delete(id: number) {

    this.todoService.delete(id).subscribe(x => {
      if (x) {

        this.load();

      }
      else {
        alert("bir hata meydana geldi");
      }
    })
  }

  isCompleted(id: number) {
    this.todoService.isCompleted(id).subscribe(x => {


      if (x == true) {
        this.load();
      }
      else {
        alert("bir hata meydana geldi");
      }

    })
  }

}
