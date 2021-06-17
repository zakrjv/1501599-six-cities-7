import React from 'react';
import PropTypes from 'prop-types';
import placeCardProp from './place-card.prop';
import {selectedRating} from '../../../const';

function PlaceCard({offer, onCardMouseOver}) {
  const {
    previewImage,
    isPremium,
    price,
    title,
    type,
    isFavorites,
    rating,
  } = offer;

  function renderButtonFavorites() {
    let className = 'place-card__bookmark-button button';
    let text = 'To bookmarks';

    if (isFavorites) {
      className += ' place-card__bookmark-button--active';
      text = 'In bookmarks';
    }

    return (
      <button className={className} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">{text}</span>
      </button>
    );
  }

  return (
    <article className="cities__place-card place-card" onMouseOver={onCardMouseOver}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image" src={previewImage} width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {renderButtonFavorites()}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: selectedRating[rating]}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: placeCardProp,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default PlaceCard;
