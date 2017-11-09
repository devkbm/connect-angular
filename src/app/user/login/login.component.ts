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

  userid: string = "";
  password: string = "";
  rememberme: boolean = false;  

  loginSuccess: boolean = true;
  responseMessage: string;
  
  userid_empty: boolean = false;
  password_empty: boolean = false;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }    

  ngOnInit() {
    let rememberid = localStorage.getItem("rememberUserId");

    if (rememberid) {
      this.userid = rememberid;
      this.rememberme = true;
    }
  }

  private validLogin() {
    if (this.checkEmptyField("all") == false )
      return;

    this.loginService.getLogin(this.userid, this.password).subscribe(
      (model: ResponseObject) => {
        console.log(model);
        this.loginSuccess = model.success;
        this.responseMessage = model.message;
        if (this.loginSuccess) {
          sessionStorage.setItem("userId", this.userid);

          if (this.rememberme)
            localStorage.setItem("rememberUserId", this.userid);
          else 
            localStorage.removeItem("rememberUserId");

          this.router.navigate(['/home']);                    
        }
      },
      (err) => {
        console.log(err);
        sessionStorage.removeItem("userId");
        localStorage.removeItem("rememberUserId");
      },
      () => {
        console.log(this.responseMessage);
      }
    );
  }
    
  private checkEmptyField(field: string): boolean {    
    let rtn = true;

    if (field == "userid") 
      this.userid == "" ? this.userid_empty = true : this.userid_empty = false;
    
    if (field == "password")
      this.password == "" ? this.password_empty = true : this.password_empty = false;    

    if (field == "all") {
      this.userid == "" ? this.userid_empty = true : this.userid_empty = false;
      this.password == "" ? this.password_empty = true : this.password_empty = false;
    }

    if ( this.userid_empty || this.password_empty )
      rtn = false;

    return rtn;
  }

}
