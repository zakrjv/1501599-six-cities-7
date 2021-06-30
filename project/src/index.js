import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {city} from './mocks/city';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Settings = {
  OFFERS_COUNT: 312,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersCount={Settings.OFFERS_COUNT}
        offers={offers}
        reviews={reviews}
        city={city}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
