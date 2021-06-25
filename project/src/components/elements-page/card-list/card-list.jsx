import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';
import {Page} from '../../../const';

function CardList({offers, currentPage, hoverOnCard}) {
  return (
    <div className={clsx({
      'favorites__places': currentPage === Page.FAVORITES,
      'near-places__list places__list': currentPage === Page.OFFER,
      'cities__places-list places__list tabs__content': currentPage === Page.MAIN,
    })}
    >
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          onCardMouseEnter={() => hoverOnCard(offer.id)}
          currentPage={currentPage} key={offer.id}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
  currentPage: PropTypes.string.isRequired,
  hoverOnCard: PropTypes.func.isRequired,
};


export default CardList;
