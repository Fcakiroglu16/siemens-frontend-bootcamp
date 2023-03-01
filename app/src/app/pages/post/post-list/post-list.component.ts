import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  constructor(private router: Router) {}

  goToPostCreate() {
    this.router.navigateByUrl('/post-create');
  }
  goToPostCreate2() {
    this.router.navigate(['/post-create']);
  }
}
