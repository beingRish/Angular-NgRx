import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeWhile } from 'rxjs';
import { updateUserComponent } from 'src/app/components/update-user.component';
import { User } from 'src/app/models/user';
import { YoutubeRepository } from 'src/app/services/youtube-repository';


@Component({
  selector: 'app-users',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <youtube-user-list *ngIf="!this.loading && !this.error" [users]="this.users"></youtube-user-list>
      <mat-spinner *ngIf="this.loading" style="padding-top: 5px;"></mat-spinner>
      <youtube-error (reload)="this.tryAgain()" *ngIf="this.error && !loading"></youtube-error>
      <button *ngIf="!this.loading && !this.error" (click)="addUser()" mat-raised-button color="primary">Add User</button>
    </div>
  `,
  styles: ['']
})
export class UsersComponent implements OnInit, OnDestroy{

  users: User[] = [];
  loading = false;
  error = false;
  isAlive = true;

  constructor(
    private youtubeRepo: YoutubeRepository,
    private dialog: MatDialog
  ){}

  ngOnInit(){
    this.fetchData();
  }

  ngOnDestroy(): void {
      this.isAlive = false;
  }

  fetchData(){
    const Observer$ = this.youtubeRepo.getUserList()
    const loading$ = Observer$[0];
    const userData$ = Observer$[1];
    const error$ = Observer$[2];
    userData$.pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.users = data;
      console.log('fetchData : userData$ : ', data);
      
    });
    loading$.pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(()=> this.isAlive)).subscribe(data => {
      this.error = data;
    });
  }

  tryAgain(){
    this.youtubeRepo.getUserList(true);
    console.log('trying');
    
  }

  addUser(){
    this.dialog.open(updateUserComponent,{
      width: '256px'
    })
  }
}

// reducer -> it contain a state (global state)
// it will take an action -> it will return a new state

// action -> it will contain a payload and type.

// Dependency Injection Priciple
// You should not depend on something directly
// component -> youtube repo -> apiService -> http Service -> http client