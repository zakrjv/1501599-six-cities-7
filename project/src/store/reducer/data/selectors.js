import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getUserData = (state) => state[NameSpace.DATA].userData;
export const getOffersFavorite = (state) => state[NameSpace.DATA].offersFavorite;

export const getLoadedData = (state) => state[NameSpace.DATA].isDataLoaded;
export const getOffersFavoriteData = (state) => state[NameSpace.DATA].isOffersFavoriteLoaded;
