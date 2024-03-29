import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createApi} from './services/api';
import {Provider} from 'react-redux';
import App from './components/app/app';
import rootReducer from './store/reducer/root-reducer';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchOffersList} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';
import browserHistory from './browser-history';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createApi(
          () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
        ),
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
