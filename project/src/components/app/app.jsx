import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../pages/main/main';
import Favorites from '../pages/favorites /favorites';
import NotFound from '../pages/not-found /not-found';
import Room from '../pages/room/room';
import SignIn from '../pages/sign-in/sign-in';
import {AppRoute} from '../../const';
import placeCardProp from '../../props/place-card.prop';

function App({offers}) {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main/>
        </Route>

        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>

        {offers.map((offer) => (
          <Route exact path={`${AppRoute.OFFER}/${offer.id}`} key={offer.id}>
            <Room
              key={offer.id}
              offer={offer}
            />
          </Route>
        ))}

        <Route exact path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>

        <Route>
          <NotFound/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

// export default App;
export default connect(mapStateToProps)(App);
