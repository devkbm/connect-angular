import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

import { User } from '../model/user-info';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  model: User;

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }

  private registerUser() {
    this.userService.registerUser(this.model);
  }
}
