import {Fragment, useState, ChangeEvent, FormEvent} from 'react';
import {NewReview} from '../../types/review';

type ReviewFormProps = {
  onSubmit: (data: NewReview) => void;
};

const RATING_RANGE = 10;

function ReviewForm({onSubmit}: ReviewFormProps): JSX.Element {
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
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: RATING_RANGE}, (_, index) => {
              const rating = RATING_RANGE - index;

              return (
                <Fragment key={rating}>
                  <input
                    className="rating__input"
                    id={`star-${rating}`}
                    type="radio"
                    name="rating"
                    value={rating}
                    onChange={handleFieldChange}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${rating}`}
                  >
                    {`Rating ${rating}`}
                  </label>
                </Fragment>
              );
            })}
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
          >
          </textarea>

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
