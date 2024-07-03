import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable()

export class ApiService {
    constructor(private httpService: HttpClient){

    }

    getAllPost() : Observable<User[]>{
        return this.httpService.get('/users')
            .pipe(map(data => data as User[]));
    }
}