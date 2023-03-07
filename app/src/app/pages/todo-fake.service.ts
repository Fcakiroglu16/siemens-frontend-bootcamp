import { Injectable } from '@angular/core';
import { find, from, Observable, of, toArray } from 'rxjs';
import { Todo } from './models/todo';
import { TodoSave } from './models/todo-save';
import { TodoUpdate } from './models/todo-update';
@Injectable({
  providedIn: 'root'
})
export class TodoFakeService {

  todoList: Todo[] = [
    { id: 1, content: "yapılacaklar 1", isCompleted: false, created: new Date() },
    { id: 2, content: "yapılacaklar 2", isCompleted: false, created: new Date() }
  ];
  constructor() { }

  save(newTodo: TodoSave): Observable<boolean> {
    const newId = Math.floor(Math.random() * 100);


    this.todoList.push({ id: newId, content: newTodo.content, isCompleted: false, created: new Date() })

    return of(true);
  }
  getAll(): Observable<Todo[]> {

    return from(this.todoList).pipe(toArray());

  }

  get(id: number): Observable<Todo | undefined> {

    return from(this.todoList).pipe(find(x => x.id == id));
  }


  delete(id: number): Observable<boolean> {

    var todoIndexToDelete = this.todoList.findIndex(x => x.id == id);

    if (todoIndexToDelete <= -1) {
      return of(false);
    }

    this.todoList.splice(todoIndexToDelete, 1);

    return of(true);
  }

  update(todo: TodoUpdate): Observable<boolean> {

    var todoIndexToUpdate = this.todoList.findIndex(x => x.id == todo.id);
    if (todoIndexToUpdate <= -1) {
      return of(false);
    }

    this.todoList[todoIndexToUpdate].content = todo.content;
    return of(true);

  }
  isCompleted(id: number): Observable<boolean> {
    var todoIndexToUpdate = this.todoList.findIndex(x => x.id == id);
    if (todoIndexToUpdate <= -1) {
      return of(false);
    }

    this.todoList[todoIndexToUpdate].isCompleted = !this.todoList[todoIndexToUpdate].isCompleted
    return of(true)

    //bad way
    // if( this.todoList[todoIndexToUpdate].isCompleted==true)
    // {
    //   this.todoList[todoIndexToUpdate].isCompleted==false
    // }
    // else
    // {
    //   this.todoList[todoIndexToUpdate].isCompleted==true
    // }


  }

}
