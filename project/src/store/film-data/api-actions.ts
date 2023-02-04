import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {AppDispatch, State} from '../../types/state';
import {FilmId, Film} from '../../types/film';
import {Reducer, APIRoute} from '../../constants';

export const fetchFilmById = createAsyncThunk<Film | void, FilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Film}/fetchFilmById`,
  async (filmId, {extra: api}) => {
    try {
      const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      return data;
    }
    catch {
      toast.error('Can\'t download film');
    }
  }
);
