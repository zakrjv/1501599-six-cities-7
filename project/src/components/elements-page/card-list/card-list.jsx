import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';

function CardList({offers}) {
  const [, setCardActive] = useState(offers.id);

  const handleCardMouseOver = (id) => {
    setCardActive(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard offer={offer} onCardMouseOver={() => {handleCardMouseOver(offer.id);}} key={offer.id}/>)}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
};


export default CardList;
