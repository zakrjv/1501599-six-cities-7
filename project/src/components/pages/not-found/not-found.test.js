import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFound from './not-found';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../../const';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <NotFound/>
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });

  it('should redirect to root page after click on link', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    history.push('/404page');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </Router>,
      </Provider>,
    );

    expect(screen.getByText('Go to main page')).toBeInTheDocument();
    userEvent.click(screen.getByText('Go to main page'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
