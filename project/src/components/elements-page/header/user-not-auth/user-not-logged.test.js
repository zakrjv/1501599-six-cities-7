import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import UserNotLogged from './user-not-logged';

describe('Component: UserNotLogged', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <UserNotLogged/>
      </Router>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
