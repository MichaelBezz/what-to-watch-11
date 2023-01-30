import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../constants';

export const changeGenre = createAction('genre/changeGenre',
  (genre: Genre) => ({payload: genre})
);

export const getFilms = createAction('films/getFilms');
export const getFilmsByGenre = createAction('films/getFilmsByGenre');
