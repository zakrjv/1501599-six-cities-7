import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewItem from './review-item';

const review =  {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4.0,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 10,
    isPro: false,
    name: 'Max',
  },
};

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <ReviewItem review={review}/>
      </Router>,
    );

    expect(screen.getByText('A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByRole('img', 'img/avatar-max.jpg')).toHaveAttribute('src', 'img/avatar-max.jpg');
    expect(screen.getByTestId('reviews-time')).toHaveAttribute('dateTime', '2019-05-08');
    expect(screen.getByTestId('reviews-time')).toHaveTextContent('May 2019');
  });
});
