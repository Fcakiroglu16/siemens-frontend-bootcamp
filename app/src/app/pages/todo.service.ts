import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, from, map, Observable, of, toArray } from 'rxjs';
import { Todo } from './models/todo';
import { TodoSave } from './models/todo-save';
import { TodoUpdate } from './models/todo-update';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = "https://localhost:7001";
  todoList: Todo[] = [];
  constructor(private http: HttpClient) { }


  getAll(): Observable<Todo[]> {


    return this.http.get<Todo[]>(`${this.baseUrl}/api/todos`);


  }

  get(id: number): Observable<Todo | undefined> {


    return this.http.get<Todo>(`${this.baseUrl}/api/todos/${id}`);

  }


  delete(id: number): Observable<boolean> {


    return this.http.delete(`${this.baseUrl}/api/todos/${id}`, { observe: 'response' }).pipe(map(x => x.status === 204));




  }


  save(newTodo: TodoSave): Observable<boolean> {

    return this.http.post<Response>(`${this.baseUrl}/api/todos`, newTodo, { observe: 'response' }).pipe(map(x => x.status === 201));



  }


  update(todo: TodoUpdate): Observable<boolean> {

    return this.http.put<Response>(`${this.baseUrl}/api/todos/${todo.id}`, todo, { observe: 'response' }).pipe(map(x => x.status === 204));

  }
  isCompleted(id: number): Observable<boolean> {

    return this.http.put<Response>(`${this.baseUrl}/api/todos/iscompleted/${id}`,{}, { observe: 'response' }).pipe(map(x => {

      console.log(x);
      return x.status === 204
    }));


  }
}
