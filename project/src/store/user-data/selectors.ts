import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {UserData} from '../../types/user';
import {Reducer, AuthorizationStatus} from '../../constants';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Reducer.User].authorizationStatus;
export const getUserData = (state: State): UserData | null => state[Reducer.User].userData;

export const getIsAuthorization = createSelector(
  [getAuthorizationStatus],
  (authorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Authorized
);
