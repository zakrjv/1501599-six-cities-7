import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadReviews, loadUserData, loadNearbyOffers} from '../../action';
import {cities} from '../../../mocks/cities';

const initialState = {
  offers: [],
  reviews: [],
  offersNearby: [],
  userData: {},
  cities: cities,
  isDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.offersNearby = action.payload;
      state.isDataLoaded = true;
    });
});

export {data};
