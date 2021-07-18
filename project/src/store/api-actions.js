import {
  loadOffers,
  loadReviews,
  loadNearbyOffers,
  requireAuthorization,
  redirectToRoute,
  logoutProfile,
  loadUserData,
  loadFavoriteOffers,
  updateOffer
} from './action';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {adaptOffersToClient, adaptReviewToClient, adaptUserToClient} from '../adapter';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.slice().map((offer) => adaptOffersToClient(offer)))))
);

const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data.slice().map((review) => adaptReviewToClient(review)))))
);

const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadReviews(data.slice().map((review) => adaptReviewToClient(review)))))
    .catch(() => {
    })
);

const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY_OFFERS}`)
    .then(({data}) => dispatch(loadNearbyOffers(data.slice().map((offer) => adaptOffersToClient(offer)))))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(loadUserData(adaptUserToClient(data)));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutProfile()))
    .then(() => dispatch(loadUserData({})))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data.slice().map((offer) => adaptOffersToClient(offer)))))
);

const updateFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(updateOffer(adaptOffersToClient(data))))
);

export {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  fetchReviewsList,
  fetchNearbyOffers,
  postReview,
  fetchFavoriteOffers,
  updateFavoriteStatus
};
