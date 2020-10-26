import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LoadUserListAction, UserActionTypes, LoadUserListSuccessAction,
    LoadUserListFailureAction, AddUserAction, AddUserSuccessAction,
    AddUserFailureAction, DeleteUserAction, DeleteUserSuccessAction, DeleteUserFailureAction } from '../actions/user.actions'
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {

  @Effect() loadUsers$ = this.actions$
    .pipe(
      ofType<LoadUserListAction>(UserActionTypes.LOAD_USERLIST),
      mergeMap(
        () => this.userService.getUsers()
          .pipe(
            map(data => {
              return new LoadUserListSuccessAction(data);
            }),
            catchError(error => of(new LoadUserListFailureAction(error)))
          )
      ),
  );

  @Effect() addUser$ = this.actions$
  .pipe(
    ofType<AddUserAction>(UserActionTypes.ADD_USER),
    mergeMap(
      (data) => this.userService.addUser(data.payload)
        .pipe(
          map(() => new AddUserSuccessAction(data.payload)),
          catchError(error => of(new AddUserFailureAction(error)))
        )
    )
);

@Effect() deleteUser$ = this.actions$
  .pipe(
    ofType<DeleteUserAction>(UserActionTypes.DELETE_USER),
    mergeMap(
      (data) => this.userService.deleteUser(data.payload)
        .pipe(
          map(() => new DeleteUserSuccessAction(data.payload)),
          catchError(error => of(new DeleteUserFailureAction(error)))
        )
    )
  );


  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}
