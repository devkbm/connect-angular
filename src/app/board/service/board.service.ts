import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../../common-layout/model/response-object';
import { ResponseList } from '../../common-layout/model/response-list';
import { Board } from '../model/board';
import { Article } from '../model/article';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BoardService {

    private API_URI = 'http://localhost:8090/grw';

    constructor(private http: HttpClient) { }

    getBoardList(): Observable<ResponseList<Board>> {
        const url = `${this.API_URI}/boards`;
        return this.http.get(url)
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    getBoard(id: number): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${id}`;
        let header = new HttpHeaders().set('x-auth-token', sessionStorage.getItem('token'));
        return this.http.get(url,{headers:header})
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    saveBoard(board: Board): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${board.pkBoard}`;
        //x-auth-token:d142b686-cee4-49cd-a59f-b25fa5da9d62
        
        let header = new HttpHeaders().set('x-auth-token', sessionStorage.getItem('token'));
        return this.http
            .post(url, board,{headers:header})
            .map((res: Response) => {
                return res;
            })
            .catch((err) => Observable.throw(err));
    }

    deleteBoard(board: Board): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${board.pkBoard}`;

        return this.http
            .delete(url)
            .map((res: Response) => {
                return res;
            })
            .catch((err) => Observable.throw(err));
    }

    getArticleList(fkBoard: string, title?: string, contents?: string): Observable<ResponseList<Article>> {
        let url = `${this.API_URI}/boards/${fkBoard}/articles`;

        if ( title !== undefined ) {
            url = url + '&title=' + title;
        }

        if ( contents !== undefined ) {
            url = url + '&contents=' + contents;
        }

        return this.http.get(url)
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    getArticle(id: number): Observable<ResponseObject<Article>> {
        const url = `${this.API_URI}/boards/articles/${id}`;
        return this.http.get(url)
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    saveArticle(article: Article): Observable<ResponseObject<Article>> {
        const url = `${this.API_URI}/boards/articles/${article.pkArticle}`;

        return this.http
            .post(url, article)
            .map((res: Response) => {
                return res;
            })
            .catch((err) => Observable.throw(err));
    }

}
