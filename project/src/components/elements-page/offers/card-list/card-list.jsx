import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import clsx from 'clsx';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../../../../props/place-card.prop';
import {Page, Options} from '../../../../const';

const sortOffers = (offersCards, option) => {
  switch (option) {
    case Options.POPULAR:
      return offersCards;
    case Options.LOW_TO_HIGH:
      return offersCards.slice().sort((a, b) => a.price - b.price);
    case Options.HIGH_TO_LOW:
      return offersCards.slice().sort((a, b) => b.price - a.price);
    case Options.TOP_RATED_FIRST:
      return offersCards.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offersCards;
  }
};

function CardList({offersByCity, currentPage, hoverOnCard}) {
  return (
    <div className={clsx({
      'favorites__places': currentPage === Page.FAVORITES,
      'near-places__list places__list': currentPage === Page.OFFER,
      'cities__places-list places__list tabs__content': currentPage === Page.MAIN,
    })}
    >
      {offersByCity.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onCardMouseEnter={() => hoverOnCard(offer.id)}
          currentPage={currentPage}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offersByCity: PropTypes.arrayOf(placeCardProp).isRequired,
  currentPage: PropTypes.string.isRequired,
  hoverOnCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offersByCity: sortOffers(state.offersByCity, state.currentOption),
});

// export default CardList;
export default connect(mapStateToProps)(CardList);
