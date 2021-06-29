import {ActionType} from './action';
import {CITIES} from '../const';

const initialState ={
  currentCity: CITIES[0],
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      }
    case ActionType.FILL_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
