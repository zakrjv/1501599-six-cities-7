import {ActionType} from '../../action';
import {cities} from '../../../mocks/cities';

const initialState = {
  offers: [],
  reviews: [],
  offersNearby: [],
  userData: {},
  cities: cities,
  isDataLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.LOAD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        offersNearby: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {data};
