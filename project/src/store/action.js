export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  SET_OFFERS: 'main/setOffers',
  CHANGE_SORTING: 'main/changeSorting',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (option) => ({
    type: ActionType.CHANGE_SORTING,
    payload: option,
  }),
};
