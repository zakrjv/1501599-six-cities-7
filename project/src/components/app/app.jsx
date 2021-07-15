import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../pages/main/main';
import Favorites from '../pages/favorites /favorites';
import NotFound from '../pages/not-found /not-found';
import Room from '../pages/room/room';
import SignIn from '../pages/sign-in/sign-in';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import {AppRoute} from '../../const';
import placeCardProp from '../../props/place-card.prop';
import {isCheckedAuth} from '../../utils';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

function App({offers, authorizationStatus, isDataLoaded}) {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>

        <PrivateRoute
          exact path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        />

        {offers.map((offer) => (
          <Route exact path={`${AppRoute.OFFER}/${offer.id}`} key={offer.id}>
            <Room
              key={offer.id}
              offer={offer}
            />
          </Route>
        ))}

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
  offers: PropTypes.arrayOf(placeCardProp),
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  offers: DATA.offers,
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: DATA.isDataLoaded,
});

// export default App;
export default connect(mapStateToProps)(App);
