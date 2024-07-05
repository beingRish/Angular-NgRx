import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { Post } from 'src/app/models/post';
import { YoutubeRepository } from 'src/app/services/youtube-repository';

@Component({
  selector: 'youtube-post',
  template: `
    <youtube-post-list [postList]="postList"></youtube-post-list>
  `,
  styles: ['']
})
export class PostComponent implements OnInit{
  postList!: Post[];
  loading = false;
  error = false;
  isAlive = true;

  constructor(private youtubeRepo: YoutubeRepository){

  }

  ngOnInit(): void {
    this.fetchData();
  }

  
  fetchData(){
    const Observer$ = this.youtubeRepo.getAllPost()
    const loading$ = Observer$[0];
    const postData$ = Observer$[1];
    const error$ = Observer$[2];
    postData$.pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.postList = data;
      console.log('fetchData : postList$ : ', data);
      
    });
    loading$.pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.error = data;
    });
  }

}
