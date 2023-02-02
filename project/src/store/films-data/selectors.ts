import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {Films} from '../../types/film';
import {Reducer, DEFAULT_GENRE} from '../../constants';

export const getActiveGenre = (state: State): string => state[Reducer.Films].activeGenre;
export const getFilms = (state: State): Films => state[Reducer.Films].films;
export const getIsFilmsLoading = (state: State): boolean => state[Reducer.Films].isFilmsLoading;

export const getGenres = createSelector(
  [getFilms],
  (films) => {
    const genres: Set<string> = new Set();
    films.forEach((film) => genres.add(film.genre));
    return [DEFAULT_GENRE, ...genres];
  }
);

export const getFilmsByGenre = createSelector(
  [getActiveGenre, getFilms],
  (genre, films) => films.filter((film) => {
    if (genre === DEFAULT_GENRE) {
      return true;
    }

    return film.genre === genre;
  })
);
