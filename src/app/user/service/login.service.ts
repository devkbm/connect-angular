import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../model/response-object';
import { User } from '../model/user-info';
import { HttpParams } from '@angular/common/http/src/params';

@Injectable()
export class LoginService {

  private API_URI = 'http://localhost:8090/user/login';

  constructor(private http: HttpClient) {
  }
  /**
   * @description 로그인 한다.
   * @paramTag 사용자 아이디 
   * @paramTag 비밀번호 
   * @returnType {ResponseObject} 유저정보
   */
  getLogin(id: string, pwd: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}?id=${id}&pwd=${pwd}`;
    return this.http.get(url)
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }
}
