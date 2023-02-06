import {Fragment, useState, ChangeEvent, FormEvent} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsReviewPosting} from '../../store/reviews-data/selectors';
import {NewReview} from '../../types/review';

type ReviewFormProps = {
  onSubmit: (data: NewReview) => void;
};

enum ReviewLength {
  Min = 50,
  Max = 400
}

const RATING_RANGE = 10;
const ratingStars = Array.from(
  {length: RATING_RANGE},
  (_, index) => RATING_RANGE - index
);

function ReviewForm({onSubmit}: ReviewFormProps): JSX.Element {
  const isReviewPosting = useAppSelector(getIsReviewPosting);

  const [formData, setFormData] = useState<NewReview>({
    rating: 0,
    comment: ''
  });

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);

    setFormData({
      rating: 0,
      comment: ''
    });
  };

  const isButtonBlocked = isReviewPosting
  || !formData.rating
  || formData.comment.length < ReviewLength.Min
  || formData.comment.length > ReviewLength.Max;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {ratingStars.map((star) => (
              <Fragment key={star}>
                <input
                  className="rating__input"
                  id={`star-${star}`}
                  type="radio"
                  name="rating"
                  value={star}
                  onChange={handleFieldChange}
                  checked={star === +formData.rating}
                  disabled={isReviewPosting}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${star}`}
                >
                  {`Rating ${star}`}
                </label>
              </Fragment>
            ))};
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            id="review-text"
            name="comment"
            value={formData.comment}
            placeholder="Review text"
            onChange={handleFieldChange}
            disabled={isReviewPosting}
          >
          </textarea>

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isButtonBlocked}>
              {!isReviewPosting ? 'Post' : 'Posting...'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
