import { UserData } from './user-data.model';
import { UserState } from '../reducers/user.reducer'
export interface AppState {
  readonly user: UserState;
}
