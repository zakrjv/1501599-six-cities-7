import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import clsx from 'clsx';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../../../../props/place-card.prop';
import {Page, Options} from '../../../../const';
import {filtersOffersByCity} from '../../../../utils';

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

function CardList({offers, currentPage, hoverOnCard, onMouseLeave}) {
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
          key={offer.id}
          onCardMouseEnter={() => hoverOnCard(offer.id)}
          currentPage={currentPage}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp).isRequired,
  currentPage: PropTypes.string.isRequired,
  hoverOnCard: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   offers: sortOffers(filtersOffersByCity(state.offers, state.currentCity), state.currentOption),
// });

const mapStateToProps = (state, props) => {
  let offers;
  switch (props.currentPage) {
    case Page.MAIN:
      offers = sortOffers(filtersOffersByCity(state.offers, state.currentCity), state.currentOption);
      break;
    case Page.OFFER:
      offers = state.offersNearby;
      break;
    case Page.FAVORITES:
      offers = state.offers;
      break;
    default:
      break;
  }

  return {
    offers,
  };
};

// export default CardList;
export default connect(mapStateToProps)(CardList);
