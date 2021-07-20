import {AuthorizationStatus} from './const';

const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
const replaceOffer = (prevOffers, newOffer) => prevOffers.map((prevOffer) => prevOffer.id === newOffer.id ? newOffer : prevOffer);

export {
  isCheckedAuth,
  replaceOffer
};
