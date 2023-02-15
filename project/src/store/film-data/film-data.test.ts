import {filmData} from './film-data';
import {fetchFilmById} from './api-actions';
import {FilmDataState} from '../../types/state';
import {makeFakeFilm} from '../../utils/mocks';

const fakeFilm = makeFakeFilm();

describe('Reducer: filmData', () => {
  let state: FilmDataState;

  beforeEach(() => {
    state = {
      film: null,
      isFilmLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(filmData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: fetchFilmById', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(filmData.reducer(state, {type: fetchFilmById.pending.type}))
        .toEqual({film: null, isFilmLoading: true});
    });

    it('should update loading status to "false" and fetch film if action fulfilled', () => {
      expect(filmData.reducer(state, {type: fetchFilmById.fulfilled.type, payload: fakeFilm}))
        .toEqual({film: fakeFilm, isFilmLoading: false});
    });

    it('should update loading status to "false" and return null of film if action rejected', () => {
      expect(filmData.reducer(state, {type: fetchFilmById.rejected.type}))
        .toEqual({film: null, isFilmLoading: false});
    });
  });
});
