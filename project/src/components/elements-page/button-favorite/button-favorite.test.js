import React from 'react';
import {render, screen} from '@testing-library/react';
import ButtonFavorite from './button-favorite';
import {Provider} from 'react-redux';
import {offers} from '../../../mocks/offers';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from "../../../const";

const mockStore = configureStore({});

describe('Component: ButtonFavorite', () => {
  it('should render correctly when offer is favorite', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <ButtonFavorite
          offerId={offers[0].id}
          isFavorites={true}
        />
      </Provider>,
    );

    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button--active');
  });

  it('should render correctly when offer is not favorite', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <ButtonFavorite
          offerId={offers[1].id}
          isFavorites={false}
        />
      </Provider>,
    );

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toHaveClass('place-card__bookmark-button--active');
  });
});
