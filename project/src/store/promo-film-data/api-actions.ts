import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {AppDispatch, State} from '../../types/state';
import {Film} from '../../types/film';
import {Reducer, APIRoute} from '../../constants';

export const fetchPromoFilmAction = createAsyncThunk<Film | void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.PromoFilm}/fetchPromoFilm`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.PromoFilm);
      return data;
    }
    catch {
      toast.error('Can\'t download promo film');
    }
  }
);
