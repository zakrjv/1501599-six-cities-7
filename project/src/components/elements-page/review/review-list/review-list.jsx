import React from 'react';
import ReviewItem from '../review-item/review-item';
import dayjs from 'dayjs';
import reviewProp from '../../../../props/review.prop';

const REVIEWS_MAX_COUNT = 10;

const compareDate = (dateA, dateB) => dayjs(dateA).diff(dayjs(dateB));

const getSortedReviews = (reviews) => {
  const sortedReviews = reviews
    .slice()
    .sort((prevReview, nextReview) => compareDate(nextReview.date, prevReview.date));

  if (sortedReviews.length > REVIEWS_MAX_COUNT) {
    return sortedReviews.slice(0, REVIEWS_MAX_COUNT);
  }

  return sortedReviews;
};

function ReviewList({reviews}) {
  const sortedReviews = getSortedReviews(reviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedReviews.map((review) => (
            <ReviewItem
              key={review.id}
              review={review}
            />
          ))
        }
      </ul>
    </>
  );
}

ReviewList.propTypes = {
  reviews: reviewProp,
};

export default ReviewList;
