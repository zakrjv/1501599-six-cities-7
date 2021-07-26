import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import City from './city';

describe('Component: City', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <City
          city={'Paris'}
          onClick={() => {
          }}
          isActive={true}/>
      </Router>,
    );

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });
});
