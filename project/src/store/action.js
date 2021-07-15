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

const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

const changeSorting = (option) => ({
  type: ActionType.CHANGE_SORTING,
  payload: option,
});

const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const logoutProfile = () => ({
  type: ActionType.LOGOUT,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const loadUserData = (userData) => ({
  type: ActionType.LOAD_USER_DATA,
  payload: userData,
});

const loadNearbyOffers = (offers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: offers,
});

export {
  changeCity,
  changeSorting,
  loadOffers,
  loadReviews,
  requireAuthorization,
  logoutProfile,
  redirectToRoute,
  loadUserData,
  loadNearbyOffers
};
