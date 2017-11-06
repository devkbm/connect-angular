import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

import { ResponseObject } from './response-object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid: string;
  password: string;

  loginSuccess: boolean;
  responseMessage: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  private validLogin() {
    this.loginService.getLogin(this.userid, this.password).subscribe(
      (model: ResponseObject) => {
        console.log(model);
        this.loginSuccess = model.success;
        this.responseMessage = model.message;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log(this.responseMessage);
      }
    );
  }

}
