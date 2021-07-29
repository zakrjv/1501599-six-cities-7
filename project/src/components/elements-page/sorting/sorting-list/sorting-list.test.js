import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import SortingList from './sorting-list';
import {Options} from "../../../../const";

const mockStore = configureStore({});

describe('Component: SortingList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      MAIN: {currentOption: Options.POPULAR}
    });

    const testOptionsRef = {
      current: true,
    };

    render(
      <Provider store={store}>
        <SortingList
          isOpened={true}
          optionsRef={testOptionsRef}
        />
      </Provider>,
    );

    expect(screen.getByText('Price: low to high')).toBeInTheDocument();
    expect(screen.getByText('Top rated first')).toBeInTheDocument();
  });
});
