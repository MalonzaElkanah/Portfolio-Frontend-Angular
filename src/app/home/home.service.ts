import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Profile, ProfessionalSkill, ProfessionalSkillList, Message } from './home';
import { environment } from './../../environments/environment';

const PROFILE_API = environment.apiUrl+'/api/v1/profile/1/';
const MESSAGE_API = environment.apiUrl+'/api/v1/messages/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': environment.apiUrl+'/'
        // Authorization: 'Bearer '
    })
};


@Injectable({
  providedIn: 'root'
})
export class HomeService {

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error
            );
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    constructor(private http: HttpClient) { }

    getProfile(){
        return this.http.get<Profile>(PROFILE_API, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    getAllProfessionalSkills(){
        return this.http.get<ProfessionalSkillList>(
            `${PROFILE_API}professional-skills/`,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    createMessage(message: Message) {
        return this.http.post<Message | any>(
            MESSAGE_API,
            {
                'first_name': message.first_name,
                'last_name': message.last_name,
                'email': message.email,
                'message': message.message
            },
            httpOptions
        );
    }
}
