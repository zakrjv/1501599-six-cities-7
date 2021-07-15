import {ActionType} from '../../action';
import {CITIES, Options} from '../../../const';

const initialState = {
  currentCity: CITIES[0],
  currentOption: Options.POPULAR,
};

const main = (state = initialState, action) => {
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

export {main};
