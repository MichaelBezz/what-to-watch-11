import {Fragment, useState, ChangeEvent} from 'react';

type FormData = {
  rating: number;
  review: string;
};

const RATING_RANGE = 10;

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    rating: 0,
    review: ''
  });

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
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
                    checked={rating === formData.rating}
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
            name="review"
            value={formData.review}
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
