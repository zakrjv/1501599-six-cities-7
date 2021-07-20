import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../../../../props/place-card.prop';
import {Page} from '../../../../const';

function CardList({offers, currentPage, onMouseEnter, onMouseLeave}) {
  return (
    <div className={clsx({
      'favorites__places': currentPage === Page.FAVORITES,
      'near-places__list places__list': currentPage === Page.OFFER,
      'cities__places-list places__list tabs__content': currentPage === Page.MAIN,
    })}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          currentPage={currentPage}
          onMouseEnter={onMouseEnter ? () => onMouseEnter(offer.id) : undefined}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp).isRequired,
  currentPage: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};


export default CardList;
