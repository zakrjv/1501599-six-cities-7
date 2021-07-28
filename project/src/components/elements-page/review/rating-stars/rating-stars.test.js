import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import RatingStars from './rating-stars';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

describe('Component: RatingStars', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router history={history}>
          <RatingStars rating={3} onChange={jest.fn()} />
        </Router>,
      </Provider>,
    );

    expect(screen.getByTestId('stars-form')).toBeInTheDocument()
  });
});
