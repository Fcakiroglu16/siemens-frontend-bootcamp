import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserListComponent } from './user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.c_user_list);
    // console.log(this.c_user_list?.name);
    console.log(this.c_userlist_native);
  }
  ngOnInit(): void {}
  title = 'app';
  @ViewChild(UserListComponent) c_user_list: UserListComponent | undefined;

  @ViewChild('c_userlist', { read: ElementRef })
  c_userlist_native: ElementRef | undefined;

  @ViewChild('header') header: ElementRef | undefined;

  changeHeader() {
    this.header!.nativeElement.style.backgroundColor = 'red';
    this.header!.nativeElement.style.color = 'blue';
  }
}
