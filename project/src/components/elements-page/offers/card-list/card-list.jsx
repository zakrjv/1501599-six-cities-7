import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
import clsx from 'clsx';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../../../../props/place-card.prop';
import {Page, Options} from '../../../../const';
import {filtersOffersByCity} from '../../../../utils';

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
  hoverOnCard: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

// const mapStateToProps = ({DATA, MAIN}, props) => {
//   let offers;
//   switch (props.currentPage) {
//     case Page.MAIN:
//       offers = sortOffers(filtersOffersByCity(DATA.offers, MAIN.currentCity), MAIN.currentOption);
//       break;
//     case Page.OFFER:
//       offers = DATA.offersNearby;
//       break;
//     case Page.FAVORITES:
//       offers = DATA.offers;
//       break;
//     default:
//       break;
//   }
//
//   return {
//     offers,
//   };
// };

export default CardList;
// export default connect(mapStateToProps)(CardList);
