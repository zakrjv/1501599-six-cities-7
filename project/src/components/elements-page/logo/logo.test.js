import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import {AppRoute} from "../../../const";

const mockStore = configureStore({});

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route>
            <Logo/>
          </Route>
          <Route exact path={AppRoute.ROOT}>
            <h1>Main page</h1>
          </Route>
        </Router>,
      </Provider>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument()
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
});
