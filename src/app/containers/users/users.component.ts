import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { UserListRequestAction, UserListSuccessAction } from 'src/actions/user-action';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { RootReducerState, getUserLoaded, getUserLoading, getUsers } from 'src/reducers';

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

  constructor(private apiService: ApiService, private store: Store<RootReducerState>){}

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData = this.store.select(getUsers);
    combineLatest([loaded$, loading$]).subscribe((data) => {
      if(!data[0] && !data[1]){
        this.store.dispatch(new UserListRequestAction());
        this.apiService.getAllPost().subscribe(res => {
          this.store.dispatch(new UserListSuccessAction({data: res}));
        });
      }
    });
    getUserData.subscribe((data) => {
      this.users = data;
    })
  }
}
