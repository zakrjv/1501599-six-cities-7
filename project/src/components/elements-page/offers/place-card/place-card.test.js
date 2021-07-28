import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlaceCard from './place-card';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {offers} from '../../../../mocks/offers';
import {AppRoute, AuthorizationStatus} from '../../../../const';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});

describe('Component: PlaceCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <PlaceCard
            onMouseEnter={() => {
            }}
            offer={offers[0]}
            onMouseLeave={() => {
            }}
            currentPage='main'
          />
        </Router>
      </Provider>);

    expect(screen.getByText(/Luxurious studio/i)).toBeInTheDocument();
    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Apartment/i)).toBeInTheDocument();
  });

  it('should redirect to room page after click on link', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route>
            <PlaceCard
              onMouseEnter={jest.fn()}
              offer={offers[0]}
              onMouseLeave={jest.fn()}
              currentPage='main'
            />
          </Route>
          <Route exact path={`${AppRoute.OFFER}/${offers[0].id}`}>
            <h1>Room page</h1>
          </Route>
        </Router>
      </Provider>,
    );

    const [img, title] = screen.queryAllByRole('link');
    userEvent.click(img);
    userEvent.click(title);
    expect(screen.getByText(/Room page/i)).toBeInTheDocument();
  });
});
