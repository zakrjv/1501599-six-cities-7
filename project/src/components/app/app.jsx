import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../pages/main/main';
import Favorites from '../pages/favorites /favorites';
import NotFound from '../pages/not-found /not-found';
import Offer from '../pages/offer/offer';
import SignIn from '../pages/sign-in/sign-in';
import {AppRoute} from '../../const';
import placeCardProp from '../elements-page/place-card/place-card.prop';

function App({offersCount, offers, city}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            offersCount={offersCount}
            offers={offers}
            city={city}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites offers={offers} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <Offer />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: placeCardProp,
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
