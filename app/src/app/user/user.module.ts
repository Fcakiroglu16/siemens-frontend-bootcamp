import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [CommonModule],
})
export class UserModule {}
