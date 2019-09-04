import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user-data';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  users: Array<User>;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((result: Array<User>) => (this.users = result));
  }
}
