import {ActionType} from './action';
import {CITIES, Options, AuthorizationStatus} from '../const';
import {cities} from '../mocks/cities';

const initialState = {
  currentCity: CITIES[0],
  offers: [],
  offersNearby: [],
  reviews: [],
  cities: cities,
  currentOption: Options.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  userData: {},
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
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isDataLoaded: true,
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
    case ActionType.LOAD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        offersNearby: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
