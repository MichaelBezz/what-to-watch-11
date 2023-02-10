import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchReviews} from '../../store/reviews-data/api-actions';
import {getReviews, getIsReviewsLoading} from '../../store/reviews-data/selectors';
import ReviewCard from '../review-card/review-card';
import Loader from '../loader/loader';
import {FilmId} from '../../types/film';
import {Reviews} from '../../types/review';

type TabReviewsProps = {
  filmId: FilmId;
};

const FilterPredicate: Record<string, (item: unknown, index: number) => boolean> = {
  Odd: (item, index) => !(index % 2),
  Even: (item, index) => !!(index % 2)
} as const;

const getReviewsByColumn = (
  reviews: Reviews,
  predicate: typeof FilterPredicate[keyof typeof FilterPredicate]
) =>
  reviews
    .filter(predicate)
    .map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));

function TabReviews({filmId}: TabReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);

  useEffect(() => {
    if (filmId) {
      dispatch(fetchReviews(filmId));
    }
  }, [dispatch, filmId]);

  if (isReviewsLoading) {
    return <Loader isInner />;
  }

  return (
    <div className="film-card__reviews film-card__row">
      {reviews.length ? (
        <>
          <div className="film-card__reviews-col">{getReviewsByColumn(reviews, FilterPredicate.Odd)}</div>
          <div className="film-card__reviews-col">{getReviewsByColumn(reviews, FilterPredicate.Even)}</div>
        </>
      ) : (
        <h2>Leave your review first!</h2>
      )}
    </div>
  );
}

export default TabReviews;
