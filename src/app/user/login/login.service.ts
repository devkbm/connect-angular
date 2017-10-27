import { Injectable } from '@angular/core';
import { User } from './user-info';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private API_URI = 'http://localhost:8090/user/login';

  public users: User[];

  constructor(private http: HttpClient) {

  }

  getLogin(id: string, pwd: string): Promise<User[]> {    
    const url =`${this.API_URI}?id=${id}&pwd=${pwd}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
