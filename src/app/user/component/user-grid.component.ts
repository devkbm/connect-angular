import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '.././service/user.service';

import { ResponseList } from '../../common-layout/model/response-list';
import { User } from '.././model/user-info';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styles: ['']
})
export class UserGridComponent implements OnInit {

  searchTitle: string;
  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getArticleList(fkBoard: string) {
    this.userService.getUserList()
      .subscribe(
        (model: ResponseList<User>) => {
          if (model.data) {
            this.userList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

}
