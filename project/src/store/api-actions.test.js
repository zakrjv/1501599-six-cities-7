import MockAdapter from 'axios-mock-adapter';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {createApi} from '../services/api';
import {ActionType} from './action';
import {
  adaptOffersToClient,
  adaptReviewToClient, adaptUserToClient,
} from '../adapter';
import {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  fetchReviewsList,
  fetchNearbyOffers,
  postReview,
  fetchFavoriteOffers,
  updateFavoriteStatus
} from './api-actions';

const offer = {
  id: 1,
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  isPremium: true,
  isFavorites: true,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 5,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 5,
  title: 'Beautiful & luxurious studio at great location',
  type: 'Apartment',
};
const review = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4.0,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 10,
    isPro: false,
    name: 'Max',
  },
};
const testUserData = {
  avatarUrl: 'test.png',
  email: 'test@test.com',
  id: 1,
  isPro: false,
  name: 'test@test.com',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
};

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {
    });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [offer]);

    return offersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptOffersToClient(offer)],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersFavoriteLoader = fetchFavoriteOffers();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [offer]);

    return offersFavoriteLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [adaptOffersToClient(offer)],
        });
      });
  });

  it('should make a correct API call to GET /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviewsList(1);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/1`)
      .reply(200, [review]);

    return reviewsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewToClient(review)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:hotel_id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyLoader = fetchNearbyOffers(1);

    apiMock
      .onGet(`${APIRoute.OFFERS}/1${APIRoute.NEARBY_OFFERS}`)
      .reply(200, [offer]);

    return nearbyLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [adaptOffersToClient(offer)],
        });
      });
  });

  it('should make correct API call to POST /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsSender = postReview(1, {comment: '', rating: 5});

    apiMock
      .onPost(`${APIRoute.REVIEWS}/1`)
      .reply(200, [review]);

    return reviewsSender(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewToClient(review)],
        });
      });
  });

  it('should make correct API call to POST /favorite/:hotel_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteStatusSender = updateFavoriteStatus(1, 0);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/0`)
      .reply(200, offer);

    return favoriteStatusSender(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptOffersToClient(offer),
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();
    const user = {};

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, jest.fn(() => {
    }), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(3);

        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(dispatch).nthCalledWith(2, {
          type: ActionType.LOAD_USER_DATA,
          payload: user,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testUser = {email: 'test@test.com', password: '123456'};
    const loginLoader = login(testUser);

    Storage.prototype.setItem = jest.fn();

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, testUserData);

    return loginLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(Storage.prototype.setItem).toBeCalledTimes(1);
        expect(Storage.prototype.setItem).nthCalledWith(1, 'token', testUserData.token);

        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: adaptUserToClient(testUserData),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      })
  });
});
