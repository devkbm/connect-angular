import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../../common-layout/model/response-object';
import { Board } from '../model/board';

@Injectable()
export class BoardService {

    private API_URI = 'http://localhost:8090/grw';
    
    constructor(private http: HttpClient) { }

    getBoard(id: number): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${id}`;
        return this.http.get(url)
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }
    

    saveBoard(board: Board): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${board.pkBoard}`;

        return this.http
            .post(url, board)
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
    
}
