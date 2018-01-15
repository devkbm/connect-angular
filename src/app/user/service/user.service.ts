import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../../common-layout/model/response-object';
import { User } from '../model/user-info';

@Injectable()
export class UserService {

  private API_URI = 'http://localhost:8090/user';

  constructor(private http: HttpClient) { }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('x-auth-token', sessionStorage.getItem('token'));
  }

  checkUser(id: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}/check/${id}`;
    return this.http.get(url, {headers: this.getHttpHeaders()})
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  getUser(id: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}/${id}`;
    return this.http.get(url, {headers: this.getHttpHeaders()})
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  registerUser(user: User): Observable<ResponseObject<User>> {
    return this.http
      .post(this.API_URI, user, {headers: this.getHttpHeaders()})
      .map((res: Response) => {
        return res;
      })
      .catch((err) => Observable.throw(err));
  }

  deleteUser(user: User): Observable<ResponseObject<User>> {
    return this.http
    .delete(this.API_URI + '/' + user.userId, {headers: this.getHttpHeaders()})
    .map((res: Response) => {
      return res;
    })
    .catch((err) => Observable.throw(err));
  }
}
