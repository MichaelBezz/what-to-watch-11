import {filmsData, setGenre} from './films-data';
import {fetchFilms} from './api-actions';
import {FilmsDataState} from '../../types/state';
import {makeFakeFilms} from '../../utils/mocks';
import {DEFAULT_GENRE} from '../../constants';

const fakeFilms = makeFakeFilms();
const fakeGenre = fakeFilms[0].genre;

describe('Reducer: filmsData', () => {
  let state: FilmsDataState;

  beforeEach(() => {
    state = {
      activeGenre: DEFAULT_GENRE,
      films: [],
      isFilmsLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(filmsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: setGenre', () => {
    it('should change genre by given value', () => {
      expect(filmsData.reducer(state, {type: setGenre, payload: fakeGenre}))
        .toEqual({activeGenre: fakeGenre, films: [], isFilmsLoading: false});
    });
  });

  describe('Action: fetchFilms', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(filmsData.reducer(state, {type: fetchFilms.pending.type}))
        .toEqual({activeGenre: DEFAULT_GENRE, films: [], isFilmsLoading: true});
    });

    it('should update loading status to "false" and fetch films if action fulfilled', () => {
      expect(filmsData.reducer(state, {type: fetchFilms.fulfilled.type, payload: fakeFilms}))
        .toEqual({activeGenre: DEFAULT_GENRE, films: fakeFilms, isFilmsLoading: false});
    });

    it('should update loading status to "false" and return empty array of films if action rejected', () => {
      expect(filmsData.reducer(state, {type: fetchFilms.rejected.type}))
        .toEqual({activeGenre: DEFAULT_GENRE, films: [], isFilmsLoading: false});
    });
  });
});
