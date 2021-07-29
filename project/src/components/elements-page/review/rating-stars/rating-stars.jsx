import React from 'react';
import PropTypes from 'prop-types';

const RATING_STARS = [5, 4, 3, 2, 1];

const textRating = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function RatingStars({onChange, rating}) {
  return (
    <div className="reviews__rating-form form__rating" data-testid="stars-form">
      {RATING_STARS.map((star) => (
        <React.Fragment key={star}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            onChange={() => onChange(star)}
            checked={star === rating}
          />
          <label
            htmlFor={`${star}-stars`}
            className="reviews__rating-label form__rating-label"
            title={textRating[star]}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

RatingStars.propTypes = {
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
