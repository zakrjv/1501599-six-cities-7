import {ActionType} from './action';
import {CITIES, Options, AuthorizationStatus} from '../const';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {cities} from '../mocks/cities';

const initialState = {
  currentCity: CITIES[0],
  offers: offers,
  reviews: reviews,
  cities: cities,
  currentOption: Options.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        currentOption: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.offers,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
