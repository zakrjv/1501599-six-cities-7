import {AuthorizationStatus} from './const';

const filtersOffersByCity = (offers, cityName) => offers.filter((offer) => (offer.city.name === cityName));
const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
const replaceOffer = (prevOffers, newOffer) => prevOffers.map((prevOffer) => prevOffer.id === newOffer.id ? newOffer : prevOffer);

export {
  filtersOffersByCity,
  isCheckedAuth,
  replaceOffer
};
