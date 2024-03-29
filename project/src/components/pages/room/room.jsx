import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../elements-page/header/header';
import {AuthorizationStatus, selectedRating, typeFavoriteButton} from '../../../const';
import ReviewForm from '../../elements-page/review/review-form/review-form';
import ReviewList from '../../elements-page/review/review-list/review-list';
import Map from '../../elements-page/map/map';
import CardList from '../../elements-page/offers/card-list/card-list';
import placeCardProp from '../../../props/place-card.prop';
import {fetchReviewsList, fetchNearbyOffers} from '../../../store/api-actions';
import ButtonFavorite from '../../elements-page/button-favorite/button-favorite';
import {getOffersNearby} from '../../../store/reducer/data/selectors';
import {getAuthorizationStatus} from '../../../store/reducer/user/selectors';

function Room({offer}) {
  const {
    id,
    images,
    isPremium,
    title,
    isFavorites,
    rating,
    type,
    bedrooms,
    description,
    maxAdults,
    price,
    goods,
    host: {
      avatarUrl,
      isPro,
      name,
    },
  } = offer;

  const offersNearby = useSelector(getOffersNearby);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const loadReviews = useCallback(
    () => dispatch(fetchReviewsList(id)),
    [dispatch, id],
  );

  const loadOffersNearby = useCallback(
    () => dispatch(fetchNearbyOffers(id)),
    [dispatch, id],
  );

  useEffect(() => {
    loadReviews();
    loadOffersNearby();
  }, [id, loadReviews, loadOffersNearby]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((img) => (
                <div key={img} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="Studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <ButtonFavorite
                  offerId={id}
                  isFavorites={isFavorites}
                  typeButton={typeFavoriteButton.ROOM}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: selectedRating[Math.round(rating)]}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar" src={avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList/>
                {authorizationStatus === AuthorizationStatus.AUTH ? <ReviewForm offerId={id}/> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offersNearby}
              currentPage='offer'
              activeOfferId={offer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList
                offers={offersNearby}
                currentPage='offer'
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  offer: placeCardProp,
};

export default Room;
