import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:string ='';
  password:string = '';
    
  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.getLogin('1','1234');
  }

  private validLogin() {
    // 로그인 체크
    return false;
  }

}
