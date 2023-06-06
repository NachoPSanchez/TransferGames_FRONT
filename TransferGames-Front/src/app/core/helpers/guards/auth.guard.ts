import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'

})

export class AuthGuard implements CanActivate {
 
    private state: boolean = false;
    private isFirstTimeLoginKey = 'isFirstTimeLogin';

    constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

    canActivate(): boolean {
        if (this.loginService.isLoggedIn()) {
            this.state = true;
        } else {
            this.toastr.error('You are not logged in.', 'Oops...', {
                timeOut: 3000,
              });
            this.state = false;
        }
        return this.state;
    }   

        
}