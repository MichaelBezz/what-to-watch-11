import {Reducer, AuthorizationStatus} from '../../constants';
import {State} from '../../types/state';
import {UserData} from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Reducer.User].authorizationStatus;
export const getUserData = (state: State): UserData | null => state[Reducer.User].userData;
