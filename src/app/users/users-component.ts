import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { UserService } from "../shared/userl.service";
import { NgFor } from "@angular/common";
@Component({
    standalone: true,
    selector: 'users-component',
    templateUrl: './users.component.html',
    imports: [NgFor]
})
export class UsersComponent implements OnInit{

    constructor(public service: UserService, private toastr: ToastrService){

    }
    
    // ngOnInit should be used when you need 
    // to perform initialization tasks that depend on Angular's
    // initialization process, such as initializing component properties, 
    // fetching data from a server, or setting up subscriptions.
    ngOnInit(): void {
        this.service.refreshList();
    }
}