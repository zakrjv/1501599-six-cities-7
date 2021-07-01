export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  SET_OFFERS: 'main/setOffers',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
};
