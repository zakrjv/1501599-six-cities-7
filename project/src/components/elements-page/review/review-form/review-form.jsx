import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStars from '../rating-stars/rating-stars';
import {postReview} from '../../../../store/api-actions';

const commentSetting = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
}

function ReviewForm({offerId, sendComment}) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCommentChange = (evt) => {
    setComment(evt.target.value);

    setIsDisabled(
      comment.length < commentSetting.MIN_LENGTH
      || rating === 0
      || comment.length > commentSetting.MAX_LENGTH
    );
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setIsDisabled(true);

    sendComment(offerId, {comment, rating});

    setRating(0);
    setComment('');
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars onChange={setRating} rating={rating}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  sendComment: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  sendComment(offerId, commentData) {
    dispatch(postReview(offerId, commentData));
  },
});

// export default ReviewForm;
export default connect(null, mapDispatchToProps)(ReviewForm);
