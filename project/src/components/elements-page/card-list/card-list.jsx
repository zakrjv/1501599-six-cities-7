import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';
import {Page} from '../../../const';

function CardList({offers, currentPage}) {
  const [cardActive, setCardActive] = useState({});

  return (
    <div className={clsx({
      'favorites__places': currentPage === Page.FAVORITES,
      'near-places__list places__list': currentPage === Page.OFFER,
      'cities__places-list places__list tabs__content': currentPage === Page.MAIN,
    })}
    >
      {offers.map((offer) => (
        <PlaceCard offer={offer} onCardMouseEnter={() => {
          setCardActive({...cardActive, ...offer});
        }} onCardMouseOut={() => {
          setCardActive({});
        }} currentPage={currentPage} key={offer.id}
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
};


export default CardList;
