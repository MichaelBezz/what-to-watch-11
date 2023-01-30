import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre} from './action';
import {films} from '../mock/films';
import {Films} from '../types/film';
import {Genre} from '../constants';

type InitialState = {
  genre: Genre;
  films: Films;
  filmsByGenre: Films;
};

const initialState: InitialState = {
  genre: Genre.Default,
  films: films,
  filmsByGenre: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      state.filmsByGenre = state.films.filter((film) => {
        if (action.payload === Genre.Default) {
          return true;
        }

        return film.genre === action.payload;
      });
    });
});

export {reducer};
