import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {
    Article,
    ArticleList,
    Comment,
    CategoryList,
    Category,
    SeriesList,
    Series
} from './blog';
import { environment } from './../../environments/environment';

const BLOG_API = environment.apiUrl+'/api/v1/blog/articles/';
const CATEGORY_API = environment.apiUrl+'/api/v1/blog/categories/';
const SERIES_API = environment.apiUrl+'/api/v1/blog/series/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': environment.apiUrl+'/'
    })
};


@Injectable({
  providedIn: 'root'
})
export class BlogService {

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

    getFeaturedArticles(){
        return this.http.get<Article[]>(
            `${BLOG_API}featured/`,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getAllArticles(search?: string, page = 1){
        let url = BLOG_API;

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

        return this.http.get<ArticleList>(
            url,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getArticle(id: number){
        return this.http.get<Article>(
            `${BLOG_API}${id}/`,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    createComment(id: number, comment: Comment) {
        return this.http.post<Comment | any>(
            `${BLOG_API}${id}/comments/`,
            {
                'name': comment.name,
                'email': comment.email,
                'message': comment.message
            },
            httpOptions
        );
    }

    getAllCategories(){
        return this.http.get<CategoryList>(
            CATEGORY_API,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getAllCategoryArticles(id: number, search?: string){
        let url = `${CATEGORY_API}${id}/articles/`;

        if (search) {
            url = `${url}?search=${search}`;
        }

        return this.http.get<[Article]>(
            url,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getCategory(id: number){
        return this.http.get<Category>(
            `${CATEGORY_API}${id}/`,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getAllSeries(){
        return this.http.get<SeriesList>(
            SERIES_API,
            httpOptions
        ).pipe(
            catchError(this.handleError)
        );
    }

    getAllSeriesArticles(id: number, search?: string) {
        let url = `${SERIES_API}${id}/articles/`;

        if (search) {
            url = `${url}?search=${search}`;
        }

        return this.http.get<[Article]>(url, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    getSeries(id: number) {
        return this.http.get<Series>(
            `${SERIES_API}${id}/`,
            httpOptions
        ).pipe(
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
