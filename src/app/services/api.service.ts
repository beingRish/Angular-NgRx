import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { User } from "../models/user";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
import { Post } from "../models/post";

@Injectable()

export class ApiService {
    constructor(private httpService: HttpService){

    }

    getAllUser() : Observable<User[]>{
        return this.httpService.get('/users')
            .pipe(map(data => data as User[]));
    }

    getUser(id: number): Observable<User> {
        return this.httpService.get('/user/' + id)
    }

    getAllPost(): Observable<Post[]> {
        const data: Post[] = [
            {
                title: 'post 1', id: 1,
                comments: [
                    {id: 11, description: 'comment 1'},
                    {id: 12, description: 'comment 2'}
                ]
            },
            {
                title: 'post 2', id: 2,
                comments: [
                    {id: 21, description: 'comment 3'},
                    {id: 22, description: 'comment 4'}
                ]
            },
        ];
        return new Observable(observer => {
            observer.next(data);
        });
    }

}