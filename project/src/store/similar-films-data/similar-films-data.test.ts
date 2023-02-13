import {similarFilmsData} from './similar-films-data';
import {fetchSimilarFilms} from './api-actions';
import {SimilarFilmsDataState} from '../../types/state';
import {makeFakeFilms} from '../../utils/mocks';

const fakeFilms = makeFakeFilms();

describe('Reducer: similarFilmsData', () => {
  let state: SimilarFilmsDataState;

  beforeEach(() => {
    state = {
      films: [],
      isSimilarFilmsLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(similarFilmsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: fetchSimilarFilms', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(similarFilmsData.reducer(state, {type: fetchSimilarFilms.pending.type}))
        .toEqual({films: [], isSimilarFilmsLoading: true});
    });

    it('should update loading status to "false" and fetch similar films if action fulfilled', () => {
      expect(similarFilmsData.reducer(state, {type: fetchSimilarFilms.fulfilled.type, payload: fakeFilms}))
        .toEqual({films: fakeFilms, isSimilarFilmsLoading: false});
    });

    it('should update loading status to "false" and return empty array of similar films if action rejected', () => {
      expect(similarFilmsData.reducer(state, {type: fetchSimilarFilms.rejected.type}))
        .toEqual({films: [], isSimilarFilmsLoading: false});
    });
  });
});
