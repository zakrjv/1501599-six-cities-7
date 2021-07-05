import {ActionType} from './action';
import {CITIES, Options} from '../const';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {cities} from '../mocks/cities';

const initialState = {
  currentCity: CITIES[0],
  offers: offers,
  reviews: reviews,
  cities: cities,
  currentOption: Options.POPULAR,
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
    default:
      return state;
  }
};

export {reducer};
