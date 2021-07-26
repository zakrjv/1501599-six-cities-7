import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MainEmpty from './main-empty';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from '../../../../store/reducer/root-reducer';

const mockStore = configureStore({});

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.MAIN]: {
        currentCity: 'Paris',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <MainEmpty/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Paris/i)).toBeInTheDocument();
  });
});
