import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class UserService {

    //prendre 
    private apiURL = 'https://jsonplaceholder.typecode.com';

    constructor(private http: HttpClient){}
}