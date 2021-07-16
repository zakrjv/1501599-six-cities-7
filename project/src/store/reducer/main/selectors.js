import {NameSpace} from '../root-reducer';

export const getCurrentCity = (state) => state[NameSpace.MAIN].currentCity;
export const getCurrentOption = (state) => state[NameSpace.MAIN].currentOption;
