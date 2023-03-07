import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    content: [''],
    id: [0]


  })
  constructor(private fb: FormBuilder, private todoService: TodoService, private activateRouter: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {


    let id = Number(this.activateRouter.snapshot.paramMap.get('id'))

    this.todoService.get(id).subscribe(x => {

      this.myForm.get('content')?.setValue(x?.content);
      this.myForm.get('id')?.setValue(id);
    })
  }
  update() {
    this.todoService.update(this.myForm.value).subscribe(isSuccess => {

      if (isSuccess) {
        this.router.navigateByUrl("/todo-list");
      }
      else {
        alert("bir hata meydana geldi");
      }
    })




  }



}
