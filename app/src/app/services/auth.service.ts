import { Injectable } from '@angular/core';
import { UserListComponent } from '../admin/user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUser: User | null = null;


  constructor() {

    this.currentUser = { id: 1, name: 'ahmet' }

  }
  isAuthenticate() {
    return this.currentUser != null;
  }
}


export interface User {
  id: number;
  name: string;
}
