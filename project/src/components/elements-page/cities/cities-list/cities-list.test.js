import React from 'react';
import {render, screen} from '@testing-library/react';
import CitiesList from './cities-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {CITIES} from "../../../../const";

const mockStore = configureStore({});

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    const store = mockStore({
        MAIN: {currentCity: CITIES[0]}
      }
    );

    render(
      <Provider store={store}>
        <CitiesList/>
      </Provider>,
    );

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
  });
});
