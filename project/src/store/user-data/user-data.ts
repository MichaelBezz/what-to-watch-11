import {createSlice} from '@reduxjs/toolkit';
import {checkAuthorizationAction, loginAction, logoutAction} from './api-actions';
import {UserData} from '../../types/user';
import {UserDataState} from '../../types/state';
import {Reducer, AuthorizationStatus} from '../../constants';

const initialState: UserDataState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData
};

export const userData = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthorizationAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorization;
        state.userData = action.payload;
      })
      .addCase(checkAuthorizationAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorization;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorization;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorization;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorization;
      });
  }
});
