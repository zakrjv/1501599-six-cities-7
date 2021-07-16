import {createAction} from '@reduxjs/toolkit';

const ActionType = {
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


const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

const changeSorting = createAction(ActionType.CHANGE_SORTING, (option) => ({
  payload: option,
}));

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

const logoutProfile = createAction(ActionType.LOGOUT);

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

const loadUserData = createAction(ActionType.LOAD_USER_DATA, (userData) => ({
  payload: userData,
}));

const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (offers) => ({
  payload: offers,
}));

export {
  ActionType,
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
