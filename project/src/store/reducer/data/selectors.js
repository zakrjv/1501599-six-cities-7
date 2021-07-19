import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';

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

export {
  getOffers,
  getOffersNearby,
  getReviews,
  getUserData,
  getOffersFavorite,
  getLoadedData,
  getOffersFavoriteData,
  getFavoriteOffersGroupedByCityName
};
