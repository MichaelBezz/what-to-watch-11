import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {AppDispatch, State} from '../../types/state';
import {Films, Film, FilmId} from '../../types/film';
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

export const setFavoriteFilm = createAsyncThunk<
Film | void,
{
  filmId: FilmId;
  status: number;
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.FavoriteFilms}/setFavoriteFilm`,
  async ({filmId, status}, {extra: api}) => {
    try {
      const {data} = await api.post<Film>(
        `${APIRoute.FavoriteFilms}/${filmId}/${status}`
      );
      return data;
    }
    catch {
      toast.error('Can\'t update status of film');
    }
  }
);
