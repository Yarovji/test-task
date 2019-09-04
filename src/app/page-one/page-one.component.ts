import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user-data';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  resoultOfAdding: string;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  addNewUser(newuser: User): void {
    this.resoultOfAdding = '';
    const user = new User(newuser);
    this.userService.addNewUser(user).subscribe(
      (result: User) => {
        this.resoultOfAdding = `Користувача ${result.name} створено`;
      },
      error => (this.resoultOfAdding = 'Користувача не створено')
    );
  }
}
