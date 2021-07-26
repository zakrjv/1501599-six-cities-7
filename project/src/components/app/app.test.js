import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, CITIES, Options} from '../../const';
import App from './app';
import {cities} from '../../mocks/cities';
import {offers} from '../../mocks/offers';
import {reviews} from '../../mocks/reviews';
import userEvent from '@testing-library/user-event';

const createFakeStore = configureStore({});
let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {
        offers: offers,
        reviews: reviews,
        offersNearby: offers,
        offersFavorite: [],
        userData:  {
          id: 1,
          name: 'test',
          isPro: '',
          avatarUrl: '',
          email: 'test@test.com',
        },
        cities: cities,
        isDataLoaded: true,
        isOffersFavoriteLoaded: true,
      },
      MAIN: {
        currentCity: CITIES[0],
        currentOption: Options.POPULAR,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    CITIES.forEach((name) => expect(screen.getByText(name)).toBeInTheDocument());
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "SignIn" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByTestId('login__title')).toHaveTextContent('Sign in');

    userEvent.type(screen.getByTestId('email'), 'test@test.ru');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/Sign in/i);
  });

  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });

});
