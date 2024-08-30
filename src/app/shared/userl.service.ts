import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { User } from "./user.model";

//Création du service qui gère les qpi
@Injectable({
    providedIn:'root'
})
export class UserService {

    //Configuration
    url: string = environment.apiBaseUrl + '/Users'
    list: User[] = [];
    formData: User = new User()
    formSubmitted: boolean = false;

    constructor(private http: HttpClient){}

    //Get list of users
    refreshList() {
        this.http.get(this.url)
            .subscribe({
                next: res => {
                    this.list = res as User[]
                },
                error: err=> {console.log(err)}
            })
    }
    // ANOTHER METHOD TO FETCH JSON DATA
    // getJsonData(): Observable<any> {
    //     return this.http.get<any>(`${this.apiUrl}/posts`).pipe(
    //     catchError(error => {
    //         console.error('Error fetching JSON data:', error);
    //         return throwError(()=> new Error('Something went wrong; please try again later.'));
    //     })
    //     );
    // }
}