import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class ApiService {
    constructor(private httpService: HttpClient){

    }

    getAllPost(){
        this.httpService.get('/users');
    }
}