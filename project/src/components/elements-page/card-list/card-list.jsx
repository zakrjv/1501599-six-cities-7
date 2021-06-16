import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';

function CardList ({offers}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer}/>)}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
};


export default CardList;
