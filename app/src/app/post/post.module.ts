import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-create', component: PostCreateComponent },
];

@NgModule({
  declarations: [PostListComponent, PostCreateComponent],
  exports: [PostListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostModule {}
