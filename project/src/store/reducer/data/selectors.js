import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {Options} from '../../../const';
import {getCurrentCity, getCurrentOption} from '../main/selectors';

const getOffers = (state) => state[NameSpace.DATA].offers;
const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
const getReviews = (state) => state[NameSpace.DATA].reviews;
const getUserData = (state) => state[NameSpace.DATA].userData;
const getOffersFavorite = (state) => state[NameSpace.DATA].offersFavorite;

const getLoadedData = (state) => state[NameSpace.DATA].isDataLoaded;
const getOffersFavoriteData = (state) => state[NameSpace.DATA].isOffersFavoriteLoaded;

const getFilterFavoriteOffers = createSelector(getOffersFavorite, (offers) =>
  offers.filter((offer) => offer.isFavorites === true),
);
const getFavoriteOffersGroupedByCityName = createSelector(getFilterFavoriteOffers, (offers) =>
  offers.reduce((allOffers, offer) => {
    const cityName = offer.city.name;
    allOffers[cityName] = [...(allOffers[cityName] || []), offer];
    return allOffers;
  }, {}),
);

const getFilterOffersByCity = createSelector([getOffers, getCurrentCity], (offers, cityName) =>
  offers.filter((offer) => (offer.city.name === cityName)),
);
const getOffersSort = createSelector([getFilterOffersByCity, getCurrentOption], (offers, option) => {
  switch (option) {
    case Options.POPULAR:
      return offers;
    case Options.LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case Options.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case Options.TOP_RATED_FIRST:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
});

export {
  getOffers,
  getOffersNearby,
  getReviews,
  getUserData,
  getOffersFavorite,
  getLoadedData,
  getOffersFavoriteData,
  getFavoriteOffersGroupedByCityName,
  getFilterOffersByCity,
  getOffersSort
};
