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
import {replaceOffer} from '../../../utils';


const initialState = {
  offers: [],
  reviews: [],
  offersNearby: [],
  offersFavorite: [],
  userData: {},
  cities: cities,
  isDataLoaded: false,
  isOffersFavoriteLoaded: false,
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
      state.isOffersFavoriteLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      state.offers = replaceOffer(state.offers, action.payload);
      state.offersNearby = replaceOffer(state.offersNearby, action.payload);
      state.offersFavorite = replaceOffer(state.offersFavorite, action.payload);
    });
});

export {data};
