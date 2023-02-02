import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {saveToken, dropToken} from '../../services/token';
import {AppDispatch, State} from '../../types/state';
import {AuthorizationData} from '../../types/authorization';
import {UserData} from '../../types/user';
import {Reducer, APIRoute} from '../../constants';

export const checkAuthorization = createAsyncThunk<UserData | void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.User}/checkAuthorization`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    }
    catch {
      toast.error('Can\'t check authorization status');
    }
  }
);

export const login = createAsyncThunk<UserData | void, AuthorizationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.User}/login`,
  async (authorizationData, {extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, authorizationData);
      saveToken(data.token);
      return data;
    }
    catch {
      toast.error('Can\'t login');
    }
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.User}/logout`,
  async (_arg, {extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    }
    catch {
      toast.error('Can\'t logout');
    }
  }
);
