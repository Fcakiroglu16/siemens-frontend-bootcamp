import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, from, map, of, switchMap, throwError, toArray } from 'rxjs';
import { Post } from './models/post';
import { Postupdate } from './models/postupdate';

@Injectable({
  providedIn: 'root'
})
export class FakeserviceService {

  constructor(private httpClient: HttpClient) { }


  getPosts() {
    let userId = 1;

    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).pipe(switchMap(x => from(x)), map(x => `${x.id}-${x.title}`))
  }


  getPostsGood() {
    let userId = 1;

    const params= new HttpParams()
    .set('userId','1')
    .set('abc','abc');

    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`,{params}).pipe(switchMap(x => from(x)), map(x => `${x.id}-${x.title}`))
  }


  GetPostsWithHeader()
  {
var myheaders= new HttpHeaders().set("authorization","my token");
return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`,{headers:myheaders})

  }

  SavePost(newPost:Post)
  {

    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts',newPost)
  }

  SavePostWithError(newPost:Post)
  {

    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/pos',newPost).pipe(catchError(err=>{

  //console.log(err);
  return  throwError(()=>new Error('bir hata meydana geldi'));
    }),finalize(()=>console.log("final methodu çalıştı")))
  }



UpdatePut(updatePost:Postupdate)
{

  return this.httpClient.put<any>(`https://jsonplaceholder.typicode.com/posts/${updatePost.id}`,{});
}
}

