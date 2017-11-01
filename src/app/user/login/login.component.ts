import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

import { User } from './user-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid: string;
  password: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.getLogin('1', '1234').subscribe(
      (model: User) => {
        console.log(model.data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('가져오기가 완료되었습니다.');
      }
    );
  }

  private validLogin() {
    // 로그인 체크
    return false;
  }

}
