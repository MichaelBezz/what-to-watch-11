import {createSlice} from '@reduxjs/toolkit';
import {checkAuthorizationAction, loginAction, logoutAction} from './api-actions';
import {UserDataState} from '../../types/state';
import {Reducer, AuthorizationStatus} from '../../constants';

const initialState: UserDataState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null
};

export const userData = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthorizationAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorization;
        state.userData = action.payload ?? null;
      })
      .addCase(checkAuthorizationAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorization;
        state.userData = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorization;
        state.userData = action.payload ?? null;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorization;
        state.userData = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorization;
        state.userData = null;
      });
  }
});
