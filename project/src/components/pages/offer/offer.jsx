import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../../elements-page/header/header';
import {selectedRating} from '../../../const';
import ReviewForm from '../../elements-page/review/review-form/review-form';
import ReviewList from '../../elements-page/review/review-list/review-list';
import Map from '../../elements-page/map/map';
import CardList from '../../elements-page/card-list/card-list';
import reviewProp from '../../../props/review.prop';
import placeCardProp from '../../../props/place-card.prop';

const OFFERS_COUNT = 3;

function Offer({reviews, offer, offers, city}) {
  const {
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
    host,
  } = offer;

  const {
    avatarUrl,
    isPro,
    name,
  } = host;

  const [activeOfferId, setActiveOfferId] = useState(0);
  const neighboringOffers = offers.slice(0, OFFERS_COUNT);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((img) => (
                <div key={img} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="Photo studio"/>
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
                <button
                  className={
                    isFavorites
                      ? 'property__bookmark-button property__bookmark-button--active button'
                      : 'property__bookmark-button button'
                  }
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">
                    {
                      isFavorites
                        ? 'In bookmarks'
                        : 'To bookmarks'
                    }
                  </span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: selectedRating[rating]}}/>
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

                <ReviewList reviews={reviews}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">

            <Map
              offers={neighboringOffers}
              city={city}
              activeOfferId={activeOfferId}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <CardList
                offers={neighboringOffers}
                currentPage='offer'
                hoverOnCard={(offerId) => setActiveOfferId(offerId)}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  reviews: reviewProp,
  offers: placeCardProp,
  offer: placeCardProp,
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

export default Offer;
