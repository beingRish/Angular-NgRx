import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { YoutubeRepository } from 'src/app/services/youtube-repository';


@Component({
  selector: 'app-users',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <youtube-user-list [users]="this.users"></youtube-user-list>
    </div>
  `,
  styles: ['']
})
export class UsersComponent implements OnInit{

  users: User[] = [];

  constructor(private youtubeRepository: YoutubeRepository){}

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    const userData$ = this.youtubeRepository.getUserList()[1];
    userData$.subscribe(data => {
      this.users = data;
    })
  }
}

// reducer -> it contain a state (global state)
// it will take an action -> it will return a new state

// action -> it will contain a payload and type.

// Dependency Injection Priciple
// You should not depend on something directly
// component -> youtube repo -> apiService -> http Service -> http client