import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container-and-template',
  templateUrl: './ng-container-and-template.component.html',
  styleUrls: ['./ng-container-and-template.component.css'],
})
export class NgContainerAndTemplateComponent implements OnInit {
  posts: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((x) => {
        this.posts = x;
      });
  }
}
