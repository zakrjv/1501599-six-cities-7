import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSorting} from '../../action';
import {CITIES, Options} from '../../../const';

const initialState = {
  currentCity: CITIES[0],
  currentOption: Options.POPULAR,
};

const main = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentOption = action.payload;
    });
});

export {main};
