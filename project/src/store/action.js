export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORTING: 'main/changeSorting',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_USER_DATA: 'data/loadUserData',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
};
