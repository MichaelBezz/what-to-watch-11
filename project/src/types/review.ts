import {UserReview} from './user';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserReview;
};

export type NewReview = Pick<Review, 'comment' | 'rating'>;
