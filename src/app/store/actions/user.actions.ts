import { Action } from '@ngrx/store';
import { UserData } from '../models/user-data.model';

export enum UserActionTypes {
    LOAD_USERLIST = '[User] Load UserList',
    LOAD_USERLIST_SUCCESS = '[User] Load UserList Success',
    LOAD_USERLIST_FAILURE = '[User] Load UserList Failure',
    ADD_USER = '[User] Add User',
    ADD_USER_SUCCESS = '[User] Add User Success',
    ADD_USER_FAILURE = '[User] Add User Failure',
    DELETE_USER = '[User] Delete User',
    DELETE_USER_SUCCESS = '[User] Delete User Success',
    DELETE_USER_FAILURE = '[User] Delete User Failure'
}

export class LoadUserListAction implements Action {
    readonly type = UserActionTypes.LOAD_USERLIST;
  }
export class LoadUserListSuccessAction implements Action {
    readonly type = UserActionTypes.LOAD_USERLIST_SUCCESS;

    constructor(public payload: Array<UserData>) {}

  }
export class LoadUserListFailureAction implements Action {
    readonly type = UserActionTypes.LOAD_USERLIST_FAILURE;

    constructor(public payload: Error) {}
  }

export class AddUserAction implements Action {
    readonly type = UserActionTypes.ADD_USER;

    constructor(public payload: UserData) { }
  }
export class AddUserSuccessAction implements Action {
    readonly type = UserActionTypes.ADD_USER_SUCCESS;

    constructor(public payload: UserData) { }
  }
export class AddUserFailureAction implements Action {
    readonly type = UserActionTypes.ADD_USER_FAILURE;

    constructor(public payload: Error) { }
  }

export class DeleteUserAction implements Action {
    readonly type = UserActionTypes.DELETE_USER;

    constructor(public payload: string) { }
  }

export class DeleteUserSuccessAction implements Action {
    readonly type = UserActionTypes.DELETE_USER_SUCCESS;

    constructor(public payload: string) { }
  }
export class DeleteUserFailureAction implements Action {
    readonly type = UserActionTypes.DELETE_USER_FAILURE;

    constructor(public payload: string) { }
  }

export type UserAction = AddUserAction |
    AddUserSuccessAction |
    AddUserFailureAction |
    DeleteUserAction |
    DeleteUserSuccessAction |
    DeleteUserFailureAction |
    LoadUserListAction |
    LoadUserListFailureAction |
    LoadUserListSuccessAction;
