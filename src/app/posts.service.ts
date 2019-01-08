import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Posts } from 'src/app/posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httService: HttpClient) { }

  getPosts(): Observable<Posts[]>{
    return this.httService.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
