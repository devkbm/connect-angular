import { Injectable } from '@angular/core';
import { User } from './user-info';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  API_URI = "http://localhost:8090/user/login";

  constructor(private http :HttpClient) {

   }
   
   getLogin(id:string, pwd:string) {
     this.http
      .get<User>('${this.API_URI}/id=${id}&pwd=${pwd}').subscribe(data => {
        console.log(data);
      });
   }

}
