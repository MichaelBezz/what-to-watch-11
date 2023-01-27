import {Reviews} from '../../types/review';
import ReviewCard from '../review-card/review-card';

type TabReviewsProps = {
  reviews: Reviews;
};

const FilterPredicate: Record<string, (item: unknown, index: number) => boolean> = {
  Odd: (item, index) => !(index % 2),
  Even: (item, index) => !!(index % 2)
} as const;

const getReviews = (reviews: Reviews, predicate: typeof FilterPredicate[keyof typeof FilterPredicate]) =>
  reviews
    .filter(predicate)
    .map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));

function TabReviews({reviews}: TabReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">{getReviews(reviews, FilterPredicate.Odd)}</div>
      <div className="film-card__reviews-col">{getReviews(reviews, FilterPredicate.Even)}</div>
    </div>
  );
}

export default TabReviews;
