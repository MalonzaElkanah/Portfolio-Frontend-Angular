import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import {Auth} from '../auth';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';

    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    constructor(
        private authService: AuthService,
        private router: Router,
        private tokenStorageService: TokenStorageService,
    ) { }

    ngOnInit(): void {
        if (this.tokenStorageService.getToken()) {
            this.isLoggedIn = true;
            // this.roles = this.tokenStorageService.getUser().roles;
        }
    }

    submitLoginForm() {
        let auth: Auth = {
            username: this.loginForm.value.username ?? '',
            password: this.loginForm.value.password ?? ''
        }

        this.authService.login(auth).subscribe(
            data => {
                this.tokenStorageService.saveToken(data.accessToken);
                this.tokenStorageService.saveUser(data.user);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                //this.roles = this.tokenStorageService.getUser().roles;

                const redirectUrl = this.authService.redirectUrl;

                if (redirectUrl === null){
                    window.location.assign(this.router.parseUrl('/').toString());
                } else {
                    this.router.navigate([redirectUrl]);
                }
            },
            err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        );
    }

    reloadPage(): void {
        window.location.reload();
    }
}
