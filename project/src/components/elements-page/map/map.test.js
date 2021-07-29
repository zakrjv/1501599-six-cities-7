import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Map from './map';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {CITIES} from '../../../const';
import {offers} from '../../../mocks/offers';

const mockStore = configureStore({});

describe('Component: Map', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      MAIN: {
        currentCity: CITIES[1],
      },
      DATA: {offers: offers}
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Map
            currentPage='main'
            offers={offers}
            activeOfferId={offers[0].id}
          />
        </Router>
      </Provider>);

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
