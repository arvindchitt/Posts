import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/posts';
// import { PostsService } from 'src/app/posts.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
      //console.log(this.posts.length);
    });
  }

}
