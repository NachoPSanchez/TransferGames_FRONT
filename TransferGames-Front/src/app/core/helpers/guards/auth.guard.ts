import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'

})

export class AuthGuard implements CanActivate {
    private state: boolean = false;

    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(): boolean {
        if (this.loginService.isLoggedIn()) {
            this.state = true;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are not logged in',
                confirmButtonText: 'Ok'
            });
            this.state = false;
        }
        return this.state;
    }

}