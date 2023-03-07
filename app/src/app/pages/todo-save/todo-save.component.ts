import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import alert from 'sweetalert2'
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


    this.todoService.save(this.myForm.value).subscribe(isSuccess => {


      if (isSuccess) {

        alert.fire({
          position: 'center',
          icon: 'success',
          title: 'Your todo saved',
          showConfirmButton: false,
          timer: 1500

        })

        this.router.navigateByUrl("todo-list");
      }


    })

  }
}
