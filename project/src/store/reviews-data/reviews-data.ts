import {createSlice} from '@reduxjs/toolkit';
import {fetchReviews} from './api-actions';
import {ReviewsDataState} from '../../types/state';
import {Reducer} from '../../constants';

const initialState: ReviewsDataState = {
  reviews: [],
  isReviewsLoading: false
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
      });
  }
});
