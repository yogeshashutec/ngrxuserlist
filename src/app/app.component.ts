import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { UserData } from './store/models/user-data.model';
import { AppState } from './store/models/app-state.model';
import { AddUserAction, DeleteUserAction, LoadUserListAction } from './store/actions/user.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-user-list';
  newUser: UserData = { id: '', fname: '', lname: '',  email: '', mobile: ''};
  userDataList: Observable<Array<UserData>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newUserItem: UserData = { id: '', fname: '', lname: '', email: '', mobile: '' };
  constructor(private store: Store<AppState>) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.userDataList = this.store.select(store => store.user.list);
    this.loading$ = this.store.select(store => store.user.loading);
    this.error$ = this.store.select(store => store.user.error);
    this.store.dispatch(new LoadUserListAction());
  }

  // tslint:disable-next-line: typedef
  addUser() {
    this.newUser.id = uuid();
    this.store.dispatch(new AddUserAction(this.newUser));
    this.newUser = { id: '', fname: '', lname: '',  email: '', mobile: ''};
  }

  // tslint:disable-next-line: typedef
  deleteUser(id: string) {
    this.store.dispatch(new DeleteUserAction(id));
  }
}
