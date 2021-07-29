import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import UserLogged from './user-logged';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import {AppRoute, AuthorizationStatus} from "../../../../const";

const mockStore = configureStore({});
const mockUserData = {
  avatarUrl: 'test.jpg',
  email: 'test@test.com',
  id: 3,
  isPro: false,
  name: 'test@test.com',
}

describe('Component: UserLogged', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {userData: mockUserData},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserLogged/>
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/test@test.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should redirect to favorites page after click on email', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {userData: mockUserData},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route>
            <UserLogged/>
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <h1>Favorites page</h1>
          </Route>
        </Router>,
      </Provider>,
    );

    userEvent.click(screen.getByTestId('email-link'));
    expect(screen.getByText(/Favorites page/i)).toBeInTheDocument();
  });
});
