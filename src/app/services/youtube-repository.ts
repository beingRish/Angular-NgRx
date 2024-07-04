import { Injectable } from "@angular/core";
import { RootReducerState, getUserError, getUserLoaded, getUserLoading, getUsers } from "../reducers";
import { Store } from "@ngrx/store";
import { Observable, combineLatest, take } from 'rxjs';
import { ApiService } from "./api.service";
import { UserDeleteAction, UserListErrorAction, UserListRequestAction, UserListSuccessAction, UserUpdateAction } from "../actions/user-action";
import { User } from "../models/user";

@Injectable()

export class YoutubeRepository {
    constructor(private apiService: ApiService, private store: Store<RootReducerState>) { }

    getUserList(force = false): [Observable<boolean>, Observable<User[]>, Observable<boolean>] {
        const loading$ = this.store.select(getUserLoading);
        const loaded$ = this.store.select(getUserLoaded);
        const getUserData$ = this.store.select(getUsers);
        const getError$ = this.store.select(getUserError);
        combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
            if (!data[0] && !data[1] || force) {
                this.store.dispatch(new UserListRequestAction());
                this.apiService.getAllPost().subscribe(res => {
                    this.store.dispatch(new UserListSuccessAction({ data: res }));
                }, error => {
                    this.store.dispatch(new UserListErrorAction());
                });
            }
        });
        return [loading$, getUserData$, getError$];
    }

    deleteUser(id: number) {
        // first we will call actual delete api
        this.store.dispatch(new UserDeleteAction({id}));
    }

    updateUser(data: User) {
        // first send details to actual api
        this.store.dispatch(new UserUpdateAction({data}));

    }
}