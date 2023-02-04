import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {AppDispatch, State} from '../../types/state';
import {FilmId} from '../../types/film';
import {Reviews} from '../../types/review';
import {Reducer, APIRoute} from '../../constants';

export const fetchReviews = createAsyncThunk<Reviews | void, FilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Reviews}/fetchReviews`,
  async (filmId, {extra: api}) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${filmId}`);
      return data;
    } catch {
      toast.error('Can\'t download reviews');
    }
  }
);
