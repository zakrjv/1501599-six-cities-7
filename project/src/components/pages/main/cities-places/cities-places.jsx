import React, {useState} from 'react';
import SortingForm from '../../../elements-page/sorting/sorting-form/sorting-form';
import CardList from '../../../elements-page/offers/card-list/card-list';
import Map from '../../../elements-page/map/map';
import {useSelector} from 'react-redux';
import {getCurrentCity, getCurrentOption} from '../../../../store/reducer/main/selectors';
import {getOffers} from '../../../../store/reducer/data/selectors';
import {filtersOffersByCity} from '../../../../utils';
import MainEmpty from '../main-empty/main-empty';
import {Options} from '../../../../const';

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

function CitiesPlaces() {
  const currentOption = useSelector(getCurrentOption);
  const currentCity = useSelector(getCurrentCity);
  const offers = useSelector(getOffers);

  const offersByCity = filtersOffersByCity(offers, currentCity);
  const offersSort = sortOffers(offersByCity, currentOption);
  const [activeOfferId, setActiveOfferId] = useState(0);

  if (offersByCity.length === 0) {
    return (
      <MainEmpty/>
    );
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
          <SortingForm/>
          <CardList
            offers={offersSort}
            currentPage='main'
            hoverOnCard={(offerId) => setActiveOfferId(offerId)}
            onMouseLeave={() => setActiveOfferId(0)}
          />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              offers={offersByCity}
              activeOfferId={activeOfferId}
              currentPage='main'
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default CitiesPlaces;
