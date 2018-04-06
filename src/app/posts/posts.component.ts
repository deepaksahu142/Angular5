import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public postServiceDatas;
  constructor(private _postService: PostService) { }

  ngOnInit() {
   this._postService.getPostsData().subscribe(responseData => this.postServiceDatas = responseData);
   setTimeout(() => {
    console.log(this.postServiceDatas);
   }, 300);

  }

}
