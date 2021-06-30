export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILL_OFFERS: 'main/fillOffers',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillOffers: (offers) => ({
    type: ActionType.FILL_OFFERS,
    payload: offers,
  }),
};

