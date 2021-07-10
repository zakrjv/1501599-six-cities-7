import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import placeCardProp from '../../../../props/place-card.prop';
import {selectedRating, Page, AppRoute} from '../../../../const';
import ButtonFavorite from '../../button-favorite/button-favorite';

function PlaceCard({offer, onCardMouseEnter, onMouseLeave, currentPage}) {
  const {
    id,
    previewImage,
    isPremium,
    price,
    title,
    type,
    isFavorites,
    rating,
  } = offer;

  return (
    <article
      className={clsx('place-card', {
        'favorites__card': currentPage === Page.FAVORITES,
        'near-places__card': currentPage === Page.OFFER,
        'cities__place-card': currentPage === Page.MAIN,
      })}
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={clsx('place-card__image-wrapper', {
        'favorites__image-wrapper': currentPage === Page.FAVORITES,
        'near-places__image-wrapper': currentPage === Page.OFFER,
        'cities__image-wrapper': currentPage === Page.MAIN,
      })}
      >
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img
            className="place-card__image" src={previewImage}
            width={clsx({
              '150': currentPage === Page.FAVORITES,
              '260': currentPage === Page.MAIN || currentPage === Page.OFFER,
            })}
            height={clsx({
              '110': currentPage === Page.FAVORITES,
              '200': currentPage === Page.MAIN || currentPage === Page.OFFER,
            })}
            alt="Place"
          />
        </Link>
      </div>
      <div className={clsx('place-card__info', {
        'favorites__card-info': currentPage === Page.FAVORITES,
      })}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite isFavorites={isFavorites}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: selectedRating[rating]}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: placeCardProp,
  onCardMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default PlaceCard;
