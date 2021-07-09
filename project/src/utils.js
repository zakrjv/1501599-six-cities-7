import {AuthorizationStatus} from './const';

const filtersOffersByCity = (offers, cityName) => offers.filter((offer) => (offer.city.name === cityName));
const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;

export {
  filtersOffersByCity,
  isCheckedAuth
};
