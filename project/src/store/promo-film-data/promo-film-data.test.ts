import {promoFilmData} from './promo-film-data';
import {fetchPromoFilm} from './api-actions';
import {PromoFilmDataState} from '../../types/state';
import {makeFakeFilm} from '../../utils/mocks';

const fakeFilm = makeFakeFilm();

describe('Reducer: promoFilmData', () => {
  let state: PromoFilmDataState;

  beforeEach(() => {
    state = {
      film: null,
      isPromoFilmLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(promoFilmData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: fetchPromoFilm', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(promoFilmData.reducer(state, {type: fetchPromoFilm.pending.type}))
        .toEqual({film: null, isPromoFilmLoading: true});
    });

    it('should update loading status to "false" and fetch promo film if action fulfilled', () => {
      expect(promoFilmData.reducer(state, {type: fetchPromoFilm.fulfilled.type, payload: fakeFilm}))
        .toEqual({film: fakeFilm, isPromoFilmLoading: false});
    });

    it('should update loading status to "false" and return null of promo film if action rejected', () => {
      expect(promoFilmData.reducer(state, {type: fetchPromoFilm.rejected.type}))
        .toEqual({film: null, isPromoFilmLoading: false});
    });
  });
});
