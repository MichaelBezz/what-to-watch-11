import {store} from '../store/store';
import {UserData} from './user';
import {Films} from './film';
import {AuthorizationStatus} from '../constants';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserDataState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type FilmsDataState = {
  films: Films;
  isFilmsLoading: boolean;
};
