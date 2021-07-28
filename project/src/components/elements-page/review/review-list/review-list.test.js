import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ReviewList from './review-list';
import {reviews} from '../../../../mocks/reviews';

const mockStore = configureStore({});

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      DATA: {reviews: reviews}
    });

    render(
      <Provider store={store}>
        <ReviewList/>
      </Provider>,
    );

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('Angelina')).toBeInTheDocument();
  });
});
