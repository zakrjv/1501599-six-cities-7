import {createReducer} from '@reduxjs/toolkit';
import {
  loadOffers,
  loadReviews,
  loadUserData,
  loadNearbyOffers,
  loadFavoriteOffers,
  updateOffer
} from '../../action';
import {cities} from '../../../mocks/cities';

const replaceOffer = (prevOffers, newOffer) => (
  prevOffers.map((prevOffer) => prevOffer.id === newOffer.id ? newOffer : prevOffer)
);

const initialState = {
  offers: [],
  reviews: [],
  offersNearby: [],
  offersFavorite: [],
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
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.offersFavorite = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      state.offers = replaceOffer(state.offers, action.payload);
    });
});

export {data};
