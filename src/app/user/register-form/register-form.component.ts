import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

import { ResponseObject } from '../model/response-object';
import { User } from '../model/user-info';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.user = new User();
  }

  private registerUser() {
    this.userService
      .registerUser(this.user)
      .subscribe(
        (model: ResponseObject<User>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  private deleteUser() {
    this.userService
      .deleteUser(this.user)
      .subscribe(
        (model: ResponseObject<User>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }
}
