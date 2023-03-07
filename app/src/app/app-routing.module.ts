import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoSaveComponent } from './pages/todo-save/todo-save.component';

import { TodoUpdateComponent } from './pages/todo-update/todo-update.component';


const routes: Routes = [
  {
    path: '', component: TodoListComponent
  },
  {
    path: 'todo-list', component: TodoListComponent
  },
  {
    path: 'todo-save', component: TodoSaveComponent
  },
  {
    path: 'todo-update/:id', component: TodoUpdateComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
