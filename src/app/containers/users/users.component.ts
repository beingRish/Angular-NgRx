import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { YoutubeRepository } from 'src/app/services/youtube-repository';


@Component({
  selector: 'app-users',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <youtube-user-list *ngIf="!this.loading && !this.error" [users]="this.users"></youtube-user-list>
      <mat-spinner *ngIf="this.loading" style="padding-top: 5px;"></mat-spinner>
      <youtube-error (reload)="this.tryAgain()" *ngIf="this.error && !loading"></youtube-error>
    </div>
  `,
  styles: ['']
})
export class UsersComponent implements OnInit{

  users: User[] = [];
  loading = false;
  error = false;

  constructor(private youtubeRepository: YoutubeRepository){}

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    const Observer$ = this.youtubeRepository.getUserList()
    const loading$ = Observer$[0];
    const userData$ = Observer$[1];
    const error$ = Observer$[2];
    userData$.subscribe(data => {
      this.users = data;
      console.log('fetchData : userData$ : ', data);
      
    });
    loading$.subscribe(data => {
      this.loading = data;
    });
    error$.subscribe(data => {
      this.error = data;
    });
  }

  tryAgain(){
    this.youtubeRepository.getUserList(true);
    console.log('trying');
    
  }
}

// reducer -> it contain a state (global state)
// it will take an action -> it will return a new state

// action -> it will contain a payload and type.

// Dependency Injection Priciple
// You should not depend on something directly
// component -> youtube repo -> apiService -> http Service -> http client