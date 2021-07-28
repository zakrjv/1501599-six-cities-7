import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CardList from './card-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {offers} from '../../../../mocks/offers';
import {AuthorizationStatus} from '../../../../const';

const mockStore = configureStore({});

describe('Component: CardList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <CardList
            offers={offers}
            currentPage='main'
            onMouseLeave={jest.fn()}
            onMouseEnter={jest.fn()}
          />
        </Router>,
      </Provider>,
    );

    offers.forEach((offer) => expect(screen.getByText(offer.title)).toBeInTheDocument());
  });
});
