import {createSlice} from '@reduxjs/toolkit';
import {fetchReviews, postReview} from './api-actions';
import {ReviewsDataState} from '../../types/state';
import {Reducer} from '../../constants';

const initialState: ReviewsDataState = {
  reviews: [],
  isReviewsLoading: false,
  isReviewPosting: false
};

export const reviewsData = createSlice({
  name: Reducer.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.isReviewsLoading = false;
        state.reviews = action.payload ?? [];
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.isReviewsLoading = false;
        state.reviews = [];
      })
      .addCase(postReview.pending, (state) => {
        state.isReviewPosting = true;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.isReviewPosting = false;
      })
      .addCase(postReview.rejected, (state) => {
        state.isReviewPosting = false;
      });
  }
});
