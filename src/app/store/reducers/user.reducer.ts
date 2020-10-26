import { UserActionTypes, UserAction } from '../actions/user.actions';
import { UserData } from '../models/user-data.model';


export interface UserState {
  list: UserData[];
  loading: boolean;
  error: Error;
}

const initialState: UserState = {
  list: [],
  loading: false,
  error: undefined
};

// tslint:disable-next-line: typedef
export function UserReducer(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOAD_USERLIST:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.LOAD_USERLIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case UserActionTypes.LOAD_USERLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case UserActionTypes.ADD_USER:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case UserActionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case UserActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

