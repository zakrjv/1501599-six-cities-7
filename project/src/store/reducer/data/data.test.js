import {ActionType} from '../../action';
import {data} from './data';
import {cities} from '../../../mocks/cities';

const state = {
  offers: [],
  reviews: [],
  offersNearby: [],
  offersFavorite: [],
  userData: {},
  cities: cities,
  isDataLoaded: false,
  isOffersFavoriteLoaded: false,
};

const mockOffers = [{
  id: 1,
  title: 'Beautiful & luxurious studio at great location',
  rating: 5,
  price: 354,
  type: 'apartment',
  isFavorites: false,
}];

describe('Reducer: main', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual(state);
  });

  it('should update offers by loaded data', () => {
    const loadOffers = {
      type: ActionType.LOAD_OFFERS,
      payload: [{offer: 'offer'}],
    };

    expect(data(state, loadOffers)).toEqual({
      offers: [{offer: 'offer'}],
      reviews: [],
      offersNearby: [],
      offersFavorite: [],
      userData: {},
      cities: cities,
      isDataLoaded: true,
      isOffersFavoriteLoaded: false,
    });
  });

  it('should update reviews by loaded data', () => {
    const loadReviews = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{review: 'review'}],
    };

    expect(data(state, loadReviews)).toEqual({
      offers: [],
      reviews: [{review: 'review'}],
      offersNearby: [],
      offersFavorite: [],
      userData: {},
      cities: cities,
      isDataLoaded: true,
      isOffersFavoriteLoaded: false,
    });
  });

  it('should update userData by loaded data', () => {
    const user = {
      avatarUrl: '',
      email: 'test@test.ru',
      isPro: false,
      name: 'test@test.ru',
    };

    const loadUserData = {
      type: ActionType.LOAD_USER_DATA,
      payload: user,
    };

    expect(data(state, loadUserData)).toEqual({
      offers: [],
      reviews: [],
      offersNearby: [],
      offersFavorite: [],
      userData: user,
      cities: cities,
      isDataLoaded: true,
      isOffersFavoriteLoaded: false,
    });
  });

  it('should update offersNearby by loaded data', () => {
    const loadNearbyOffers = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [{offersNearby: 'offersNearby'}],
    };

    expect(data(state, loadNearbyOffers)).toEqual({
      offers: [],
      reviews: [],
      offersNearby: [{offersNearby: 'offersNearby'}],
      offersFavorite: [],
      userData: {},
      cities: cities,
      isDataLoaded: true,
      isOffersFavoriteLoaded: false,
    });
  });

  it('should update offersFavorite by loaded data', () => {
    const loadFavoriteOffers = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [{offersFavorite: 'offersFavorite'}],
    };

    expect(data(state, loadFavoriteOffers)).toEqual({
      offers: [],
      reviews: [],
      offersNearby: [],
      offersFavorite: [{offersFavorite: 'offersFavorite'}],
      userData: {},
      cities: cities,
      isDataLoaded: false,
      isOffersFavoriteLoaded: true,
    });
  });

  it('should update offers by action payload', () => {
    const state = {offers: mockOffers, offersNearby: mockOffers, offersFavorite: mockOffers};
    const offer = {
      id: 1,
      title: 'Beautiful & luxurious studio at great location',
      rating: 5,
      price: 354,
      type: 'apartment',
      isFavorites: true,
    };
    const updateOffer = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(data(state, updateOffer)).toEqual({
      offers: [offer],
      offersNearby: [offer],
      offersFavorite: [offer],
    });
  });
});
