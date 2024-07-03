import { Injectable } from "@angular/core";
import { RootReducerState, getUserLoaded, getUserLoading, getUsers } from "../reducers";
import { Store } from "@ngrx/store";
import { Observable, combineLatest } from 'rxjs';
import { ApiService } from "./api.service";
import { UserListRequestAction, UserListSuccessAction } from "../actions/user-action";
import { User } from "../models/user";

@Injectable()

export class YoutubeRepository {
    constructor(private apiService: ApiService, private store: Store<RootReducerState>) { }

    getUserList(force = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getUserLoading);
        const loaded$ = this.store.select(getUserLoaded);
        const getUserData = this.store.select(getUsers);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if (!data[0] && !data[1] || force) {
                this.store.dispatch(new UserListRequestAction());
                this.apiService.getAllPost().subscribe(res => {
                    this.store.dispatch(new UserListSuccessAction({ data: res }));
                });
            }
        });
        return [loading$, getUserData];
    }
}