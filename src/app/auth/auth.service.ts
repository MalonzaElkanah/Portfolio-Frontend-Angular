import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Auth } from './auth'

const AUTH_API = 'http://127.0.0.1:5000/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    redirectUrl = null;

    constructor(private http: HttpClient) { }

    login(auth: Auth): Observable<any> {
        return this.http.post(AUTH_API + 'login/', auth, httpOptions);
    }

    register(auth: Auth): Observable<any> {
        return this.http.post(AUTH_API + 'register/', auth, httpOptions);
    }
}
