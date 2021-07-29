import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Main from '../pages/main/main';
import Favorites from '../pages/favorites/favorites';
import NotFound from '../pages/not-found/not-found';
import Room from '../pages/room/room';
import SignIn from '../pages/sign-in/sign-in';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import {AppRoute} from '../../const';
import {isCheckedAuth} from '../../utils';
import PrivateRoute from '../private-route/private-route';
import {getAuthorizationStatus} from '../../store/reducer/user/selectors';
import {getLoadedData, getOffers} from '../../store/reducer/data/selectors';

function App() {
  const offers = useSelector(getOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedData);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Main/>
      </Route>

      <PrivateRoute
        exact path={AppRoute.FAVORITES}
        render={() => <Favorites/>}
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
        <SignIn/>
      </Route>

      <Route>
        <NotFound/>
      </Route>

    </Switch>
  );
}

export default App;
