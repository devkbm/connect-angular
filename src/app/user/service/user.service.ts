import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../../common-layout/model/response-object';
import { User } from '../model/user-info';
import { HttpParams } from '@angular/common/http/src/params';

@Injectable()
export class UserService {

  private API_URI = 'http://localhost:8090/user';

  constructor(private http: HttpClient) { }

  checkUser(id: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}/check/${id}`;
    return this.http.get(url)
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  registerUser(user: User): Observable<ResponseObject<User>> {
    return this.http
      .post(this.API_URI, user)
      .map((res: Response) => {
        return res;
      })
      .catch((err) => Observable.throw(err));
  }

  deleteUser(user: User): Observable<ResponseObject<User>> {
    return this.http
    .delete(this.API_URI + '/' + user.userId)
    .map((res: Response) => {
      return res;
    })
    .catch((err) => Observable.throw(err));
  }
}
