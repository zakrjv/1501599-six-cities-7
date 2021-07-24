import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignInMain from './sign-in-main';

const mockStore = configureStore({});

describe('Component: SignIn', () => {
  it('should render "SignIn" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SignInMain/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('login__title')).toHaveTextContent('Sign in');

    userEvent.type(screen.getByTestId('email'), 'test@test.ru');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
