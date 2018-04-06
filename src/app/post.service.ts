import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Post } from './post';

@Injectable()
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPostsData(): Observable<Post> {
    return this.http.get<Post>(this.apiUrl);
  }


}
