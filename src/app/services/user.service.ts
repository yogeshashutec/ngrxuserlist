
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../store/models/user-data.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_URL = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  public getUsers() {
    return this.http.get<Array<UserData>>(this.USER_URL)
      .pipe(
      delay(500)
    );
  }

 // tslint:disable-next-line: typedef
  public addUser(user: UserData) {
    return this.http.post(this.USER_URL, user)
      .pipe(
        delay(500)
      );
  }

  // tslint:disable-next-line: typedef
  public deleteUser(id: string) {
    return this.http.delete(`${this.USER_URL}/${id}`)
      .pipe(
        delay(500)
      );
  }
}
