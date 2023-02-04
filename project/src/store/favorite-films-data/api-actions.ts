import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {AppDispatch, State} from '../../types/state';
import {Films} from '../../types/film';
import {Reducer, APIRoute} from '../../constants';

export const fetchFavoriteFilms = createAsyncThunk<Films | void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.FavoriteFilms}/fetchFavoriteFilms`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.FavoriteFilms);
      return data;
    }
    catch {
      toast.error('Can\'t download favorite films');
    }
  }
);
