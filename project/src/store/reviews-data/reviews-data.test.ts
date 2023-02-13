import {reviewsData} from './reviews-data';
import {fetchReviews, postReview} from './api-actions';
import {ReviewsDataState} from '../../types/state';
import {makeFakeReviews} from '../../utils/mocks';

const fakeReviews = makeFakeReviews();

describe('Reducer: reviewsData', () => {
  let state: ReviewsDataState;

  beforeEach(() => {
    state = {
      reviews: [],
      isReviewsLoading: false,
      isReviewPosting: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(reviewsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: fetchReviews', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(reviewsData.reducer(state, {type: fetchReviews.pending.type}))
        .toEqual({...state, isReviewsLoading: true});
    });

    it('should update loading status to "false" and fetch reviews if action fulfilled', () => {
      expect(reviewsData.reducer(state, {type: fetchReviews.fulfilled.type, payload: fakeReviews}))
        .toEqual({...state, reviews: fakeReviews, isReviewsLoading: false});
    });

    it('should update loading status to "false" and return empty array of reviews if action rejected', () => {
      expect(reviewsData.reducer(state, {type: fetchReviews.rejected.type}))
        .toEqual({...state, reviews: [], isReviewsLoading: false});
    });
  });

  describe('Action: postReview', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(reviewsData.reducer(state, {type: postReview.pending.type}))
        .toEqual({...state, isReviewPosting: true});
    });

    it('should update loading status to "false" if action fulfilled', () => {
      expect(reviewsData.reducer(state, {type: postReview.fulfilled.type}))
        .toEqual({...state, isReviewPosting: false});
    });

    it('should update loading status to "false" if action rejected', () => {
      expect(reviewsData.reducer(state, {type: postReview.rejected.type}))
        .toEqual({...state, isReviewPosting: false});
    });
  });
});
