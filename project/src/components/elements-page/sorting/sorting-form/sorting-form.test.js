import React from 'react';
import {render, screen} from '@testing-library/react';
import SortingForm from './sorting-form';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {offers} from '../../../../mocks/offers';
import userEvent from "@testing-library/user-event";
import {Options} from '../../../../const';

const mockStore = configureStore({});

describe('Component: SortingForm', () => {
  it('should render correctly', () => {
    const store = mockStore({
      MAIN: {currentOption: Options.POPULAR}
    });

    render(
      <Provider store={store}>
        <SortingForm offerId={offers[0].id}/>
      </Provider>,
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByText(/Top rated first/i)).toBeInTheDocument();
  });

  it('should change currentOption on click', () => {
    const store = mockStore({
      MAIN: {currentOption: Options.POPULAR}
    });

    const {container} = render(
      <Provider store={store}>
        <SortingForm offerId={offers[0].id}/>
      </Provider>,
    );

    expect(container.querySelector('.places__options')).not.toHaveClass('places__options--opened');
    userEvent.click(screen.getByTestId('sorting'));
    expect(container.querySelector('.places__options')).toHaveClass('places__options--opened');
  });
});
