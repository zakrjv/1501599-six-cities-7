import {ActionCreator} from './action';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {adaptOffersToClient, adaptReviewToClient, adaptUserToClient} from '../adapter';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.slice().map((offer) => adaptOffersToClient(offer)))))
);

const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.slice().map((review) => adaptReviewToClient(review)))))
);

const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.slice().map((review) => adaptReviewToClient(review)))))
    .catch(() => {
    })
);

const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY_OFFERS}`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data.slice().map((offer) => adaptOffersToClient(offer)))))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.loadUserData(adaptUserToClient(data)));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.loadUserData({})))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  fetchReviewsList,
  fetchNearbyOffers,
  postReview
};
