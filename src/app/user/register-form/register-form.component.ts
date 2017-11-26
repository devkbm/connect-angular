import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserService } from '../service/user.service';
import { AppAlarmService } from '../../common-layout/app-alarm.service';

import { ResponseObject } from '../../common-layout/model/response-object';
import { User } from '../model/user-info';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private user: User;

  @Output() messageChanged: EventEmitter<string> = new EventEmitter();

  constructor(private userService: UserService,
              private appAlarmService: AppAlarmService) { }

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

  private checkUser() {
    this.messageChanged.emit('test');
    this.userService
      .checkUser(this.user.userId)
      .subscribe(
        (model: ResponseObject<User>) => {
          console.log(model);
          this.appAlarmService.changeMessage(model.message);
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
