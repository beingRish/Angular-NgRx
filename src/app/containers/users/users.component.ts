import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    this.apiService.getAllPost().subscribe(data => {
      this.users = data; 
      console.log('fetchData',this.users);
           
    });
  }
}
