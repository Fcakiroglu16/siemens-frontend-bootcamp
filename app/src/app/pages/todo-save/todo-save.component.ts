import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-save',
  templateUrl: './todo-save.component.html',
  styleUrls: ['./todo-save.component.css']
})
export class TodoSaveComponent {

  myForm: FormGroup = this.fb.group({
    content: ['']


  })

  constructor(private fb: FormBuilder, private todoService: TodoService, private router: Router) {


  }

  save() {


    this.todoService.save(this.myForm.value).subscribe(x => {


      if (x) {
        this.router.navigateByUrl("todo-list");
      }


    })

  }
}
