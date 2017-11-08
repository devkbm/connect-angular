import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  loginSuccess: boolean = true;
  responseMessage: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  private validLogin() {
    this.loginService.getLogin(this.userid, this.password).subscribe(
      (model: ResponseObject) => {
        console.log(model);
        this.loginSuccess = model.success;
        this.responseMessage = model.message;
        if (this.loginSuccess) {
          this.router.navigate(['/home']);                   
          sessionStorage.setItem('userId', this.userid);
        }
      },
      (err) => {
        console.log(err);
        sessionStorage.removeItem('userId');
      },
      () => {
        console.log(this.responseMessage);
      }
    );
  }

}
