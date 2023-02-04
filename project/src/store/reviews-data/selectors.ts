import {State} from '../../types/state';
import {Reviews} from '../../types/review';
import {Reducer} from '../../constants';

export const getReviews = (state: State): Reviews => state[Reducer.Reviews].reviews;
export const getIsReviewsLoading = (state: State): boolean => state[Reducer.Reviews].isReviewsLoading;
