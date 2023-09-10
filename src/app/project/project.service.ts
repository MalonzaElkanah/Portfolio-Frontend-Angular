import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {
    Project,
    ProjectList,
    Keyword,
    KeywordList
} from './project';
import { environment } from './../../environments/environment';

const PROJECT_API = environment.apiUrl+'/api/v1/projects/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': environment.apiUrl+'/'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

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

    getAllProjects(search?: string, page = 1){
        let url = PROJECT_API;

        if (page > 1) {
            url = `${url}?page=${page}`;
        }

        if (search) {
            if (page > 1) {
                url = `${url}&?search=${search}`;
            } else {
                url = `${url}?search=${search}`;
            }
        }

        return this.http.get<ProjectList>(url, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    getProject(id: number){
        return this.http.get<Project>(
            `${PROJECT_API}${id}/`,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getAllKeywords(){
        return this.http.get<KeywordList>(
            `${PROJECT_API}keywords/`,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getKeywordProjects(keyword: string, search?: string){
        let url = `${PROJECT_API}keywords/${keyword}/projects/`;

        if (search) {
            url = `${url}?search=${search}`;
        }

        return this.http.get<[Project]>(url, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    slugify(str: string): string {
        return str.toLowerCase(
        ).trim(
        ).replace(
            /[^\w\s-]/g,
            ''
        ).replace(
            /[\s_-]+/g,
            '-'
        ).replace(
            /^-+|-+$/g,
            ''
        );  
    }
}
