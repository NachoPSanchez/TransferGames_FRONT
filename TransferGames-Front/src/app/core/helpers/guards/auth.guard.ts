import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../services/auth.service";

@Injectable({
    providedIn: 'root'

})

export class AuthGuard implements CanActivate {
 
    private state: boolean = false;
    private isFirstTimeLoginKey = 'isFirstTimeLogin';

    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

    canActivate(): boolean {
        if (this.authService.isLogged()) {
            this.state = true;
        } else {
            this.toastr.error('No has iniciado sesión aún', 'Oops...', {
                timeOut: 3000,
              });
            this.state = false;
        }
        return this.state;
    }   

        
}