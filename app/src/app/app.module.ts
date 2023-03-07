import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoSaveComponent } from './pages/todo-save/todo-save.component';
import { TodoUpdateComponent } from './pages/todo-update/todo-update.component';






@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoSaveComponent,
    TodoUpdateComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
