import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewForm from './review-form';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {offers} from '../../../../mocks/offers';
import userEvent from "@testing-library/user-event";

const mockStore = configureStore({});

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <ReviewForm offerId={offers[0].id}/>
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText(/50 characters/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('review'), 'testing text');
    expect(screen.getByText(/testing text/i)).toBeInTheDocument();
  });
});
