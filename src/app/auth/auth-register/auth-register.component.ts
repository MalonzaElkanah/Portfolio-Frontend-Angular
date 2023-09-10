import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from '../auth.service'
import {Auth} from '../auth'

@Component({
    selector: 'app-auth-register',
    templateUrl: './auth-register.component.html',
    styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent {
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    registerForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private authService: AuthService, private router: Router) { }

    submitRegisterForm(): void {
        let auth: Auth = {
            username: this.registerForm.value.username ?? '',
            password: this.registerForm.value.password ?? ''
        }

        this.authService.register(auth).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;

                alert("Sign Up successful! Please Log in.");

                this.router.navigate(['/auth/login']);
            },
            err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        )
    }
}
