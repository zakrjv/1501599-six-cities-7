import {
  ActionType,
  changeCity,
  changeSorting,
  loadOffers,
  loadReviews,
  requireAuthorization,
  logoutProfile,
  redirectToRoute,
  loadUserData,
  loadNearbyOffers,
  loadFavoriteOffers,
  updateOffer
} from './action';

describe('Actions', () => {
  it('action creator for changing city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Amsterdam',
    };

    expect(changeCity('Amsterdam')).toEqual(expectedAction);
  });

  it('action creator for changing sort returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTING,
      payload: 'Popular',
    };

    expect(changeSorting('Popular')).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [{offer: 'offer'}],
    };

    expect(loadOffers([{offer: 'offer'}])).toEqual(expectedAction);
  });

  it('action creator for loading reviews returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{comment: 'comment'}],
    };

    expect(loadReviews([{comment: 'comment'}])).toEqual(expectedAction);
  });

  it('action creator for requiring authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'NO_AUTH',
    };

    expect(requireAuthorization('NO_AUTH')).toEqual(expectedAction);
  });

  it('action creator for logout profile returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logoutProfile()).toEqual(expectedAction);
  });

  it('action creator for redirecting returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/hotels',
    };

    expect(redirectToRoute('/hotels')).toEqual(expectedAction);
  });

  it('action creator for loading user data returns correct action', () => {
    const user = {
      avatarUrl: '',
      email: 'test@test.ru',
      isPro: false,
      name: 'test@test.ru',
    };

    const expectedAction = {
      type: ActionType.LOAD_USER_DATA,
      payload: user,
    };

    expect(loadUserData(user)).toEqual(expectedAction);
  });

  it('action creator for loading nearby offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [{nearbyOffer: 'nearbyOffer'}],
    };

    expect(loadNearbyOffers([{nearbyOffer: 'nearbyOffer'}])).toEqual(expectedAction);
  });

  it('action creator for loading favorite offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [{favoriteOffer: 'favoriteOffer'}],
    };

    expect(loadFavoriteOffers([{favoriteOffer: 'favoriteOffer'}])).toEqual(expectedAction);
  });

  it('action creator for updating offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: {offer: 'offer'},
    };

    expect(updateOffer({offer: 'offer'})).toEqual(expectedAction);
  });
});
