import {CITIES, Options} from '../../../const';
import {ActionType} from '../../action';
import {main} from './main';

describe('Reducer: main', () => {
  it('without additional parameters should return initial state', () => {
    expect(main(undefined, {}))
      .toEqual({
        currentCity: CITIES[0],
        currentOption: Options.POPULAR,
      });
  });

  it('should update currentCity by action payload', () => {
    const state = {
      currentCity: CITIES[0],
      currentOption: Options.POPULAR,
    };

    const changeCity = {
      type: ActionType.CHANGE_CITY,
      payload: CITIES[1],
    };

    expect(main(state, changeCity))
      .toEqual({
        currentCity: CITIES[1],
        currentOption: Options.POPULAR,
      });
  });

  it('should update sort type by action payload', () => {
    const state = {
      currentCity: CITIES[0],
      currentOption: Options.POPULAR,
    };

    const changeSorting = {
      type: ActionType.CHANGE_SORTING,
      payload: Options.TOP_RATED_FIRST,
    };

    expect(main(state, changeSorting)).toEqual({
      currentCity: CITIES[0],
      currentOption: Options.TOP_RATED_FIRST,
    });
  });
});
