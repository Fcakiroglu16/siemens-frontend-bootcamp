import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, switchMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private client: HttpClient) {}

  searchByProductName(name: string) {
    return this.client
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        switchMap((x) => from(x)),
        filter((x) => x.title.includes(name)),
        toArray()
      );
  }
}
