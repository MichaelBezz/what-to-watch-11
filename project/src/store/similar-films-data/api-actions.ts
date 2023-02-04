import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {AppDispatch, State} from '../../types/state';
import {FilmId, Films} from '../../types/film';
import {Reducer, APIRoute} from '../../constants';

export const fetchSimilarFilms = createAsyncThunk<Films | void, FilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.SimilarFilms}/fetchSimilarFilms`,
  async (filmId, {extra: api}) => {
    try {
      const {data} = await api.get<Films>(
        `${APIRoute.Films}/${filmId}${APIRoute.SimilarFilms}`
      );
      return data;
    }
    catch {
      toast.error('Can\'t download similar films');
    }
  }
);
