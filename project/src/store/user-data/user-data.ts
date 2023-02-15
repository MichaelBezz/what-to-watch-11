import {createSlice} from '@reduxjs/toolkit';
import {checkAuthorization, login, logout} from './api-actions';
import {UserDataState} from '../../types/state';
import {Reducer, AuthorizationStatus} from '../../constants';

const initialState: UserDataState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null
};

export const userData = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {
    setUserDataToDefault: (state) => {
      state = initialState;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthorization.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorized;
        state.userData = action.payload ?? null;
      })
      .addCase(checkAuthorization.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorized;
        state.userData = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorized;
        state.userData = action.payload ?? null;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorized;
        state.userData = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorized;
        state.userData = null;
      });
  }
});

export const {setUserDataToDefault} = userData.actions;
