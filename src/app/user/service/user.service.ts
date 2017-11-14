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

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    registerUser(user: User) {
        return this.http
          .post('http://localhost:8090/user', user)
          .subscribe(
            (res) => {
              console.log(res);
            },
           err => {
              console.log(err);
           },
           () => {
              console.log('completed');
           });
      }

}