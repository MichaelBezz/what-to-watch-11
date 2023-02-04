import ReviewCard from '../review-card/review-card';
import {FilmId} from '../../types/film';
import {Reviews} from '../../types/review';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchReviews } from '../../store/reviews-data/api-actions';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getReviews, getIsReviewsLoading } from '../../store/reviews-data/selectors';
import Loader from '../loader/loader';

type TabReviewsProps = {
  filmId: FilmId;
};

const FilterPredicate: Record<string, (item: unknown, index: number) => boolean> = {
  Odd: (item, index) => !(index % 2),
  Even: (item, index) => !!(index % 2)
} as const;

const getReviewsByColumn = (
  reviews: Reviews | null,
  predicate: typeof FilterPredicate[keyof typeof FilterPredicate]
) =>
  reviews
    ?.filter(predicate)
    ?.map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));

function TabReviews({filmId}: TabReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && filmId) {
      dispatch(fetchReviews(filmId));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, filmId]);

  if (isReviewsLoading) {
    return <Loader isInner />;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">{getReviewsByColumn(reviews, FilterPredicate.Odd)}</div>
      <div className="film-card__reviews-col">{getReviewsByColumn(reviews, FilterPredicate.Even)}</div>
    </div>
  );
}

export default TabReviews;
