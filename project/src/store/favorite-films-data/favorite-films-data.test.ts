import {favoriteFilmsData} from './favorite-films-data';
import {fetchFavoriteFilms, postFavoriteFilm} from './api-actions';
import {FavoriteFilmsDataState} from '../../types/state';
import {makeFakeFilms} from '../../utils/mocks';

const fakeFilms = makeFakeFilms();
const fakeFavoriteFilm = {...fakeFilms[0], isFavorite: true};
const fakeNotFavoriteFilm = {...fakeFilms[0], isFavorite: false};

describe('Reducer: favoriteFilmsData', () => {
  let state: FavoriteFilmsDataState;

  beforeEach(() => {
    state = {
      films: [],
      isFavoriteFilmsLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(favoriteFilmsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: fetchFavoriteFilms', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(favoriteFilmsData.reducer(state, {type: fetchFavoriteFilms.pending.type}))
        .toEqual({films: [], isFavoriteFilmsLoading: true});
    });

    it('should update loading status to "false" and fetch favorite films if action fulfilled', () => {
      expect(favoriteFilmsData.reducer(state, {type: fetchFavoriteFilms.fulfilled.type, payload: fakeFilms}))
        .toEqual({films: fakeFilms, isFavoriteFilmsLoading: false});
    });

    it('should update loading status to "false" and return empty array of favorite films if action rejected', () => {
      expect(favoriteFilmsData.reducer(state, {type: fetchFavoriteFilms.rejected.type}))
        .toEqual({films: [], isFavoriteFilmsLoading: false});
    });
  });

  describe('Action: postFavoriteFilm', () => {
    it('should update array of favorite films in redux, if film is favorite', () => {
      expect(favoriteFilmsData.reducer(state, {type: postFavoriteFilm.fulfilled.type, payload: fakeFavoriteFilm}))
        .toEqual({films: [fakeFavoriteFilm], isFavoriteFilmsLoading: false});
    });

    it('should not update array of favorite films in redux, if film is not favorite', () => {
      expect(favoriteFilmsData.reducer(state, {type: postFavoriteFilm.fulfilled.type, payload: fakeNotFavoriteFilm}))
        .toEqual({films: [], isFavoriteFilmsLoading: false});
    });

    it('should delete film from state if it has not status favorite', () => {
      expect(favoriteFilmsData.reducer({...state, films: [fakeFavoriteFilm]}, {type: postFavoriteFilm.fulfilled.type, payload: fakeNotFavoriteFilm}))
        .toEqual({films: [], isFavoriteFilmsLoading: false});
    });
  });
});
