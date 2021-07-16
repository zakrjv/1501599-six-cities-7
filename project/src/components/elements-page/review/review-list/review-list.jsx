import React from 'react';
import {useSelector} from 'react-redux';
import ReviewItem from '../review-item/review-item';
import dayjs from 'dayjs';
import {getReviews} from '../../../../store/reducer/data/selectors';

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

function ReviewList() {
  const reviews = useSelector(getReviews);
  const sortReviews = getSortedReviews(reviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortReviews.map((review) => (
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

export default ReviewList;
