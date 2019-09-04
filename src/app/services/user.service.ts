import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<[User]> {
    return this.http.get<[User]>(`http://localhost:8081/api/users`);
  }

  addNewUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/api/user`, user);
  }
}
