import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserService } from '../service/user.service';
import { AppAlarmService } from '../../common-layout/app-alarm.service';

import { ResponseObject } from '../../common-layout/model/response-object';

import { Authority } from '../model/authority-info';


@Component({
  selector: 'app-authority-form',
  templateUrl: './authority-form.component.html',
  styles: ['']
})
export class AuthorityFormComponent implements OnInit {

  private auth: Authority;

  constructor(private userService: UserService,
              private appAlarmService: AppAlarmService) { }

  ngOnInit() {
    this.auth = new Authority();
  }

  private getUser() {
    this.userService
      .getUser(this.user.userId)
      .subscribe(
        (model: ResponseObject<User>) => {
          if (model.total > 0) {
            this.user = model.data;
          } else {
            this.user = new User();
          }
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
