import {formatReviewDate} from '../../utils/utils';
import {Review} from '../../types/review';

type ReviewProps = {
  review: Review;
};

function ReviewCard({review}: ReviewProps): JSX.Element {
  const {comment, date, rating, user} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{formatReviewDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewCard;
