import React, {useState} from 'react';
import SortingForm from '../../../elements-page/sorting/sorting-form/sorting-form';
import CardList from '../../../elements-page/offers/card-list/card-list';
import Map from '../../../elements-page/map/map';
import {useSelector} from 'react-redux';
import {getCurrentCity} from '../../../../store/reducer/main/selectors';
import MainEmpty from '../main-empty/main-empty';
import {getFilterOffersByCity, getOffersSort} from '../../../../store/reducer/data/selectors';

function CitiesPlaces() {
  const currentCity = useSelector(getCurrentCity);
  const offersByCity = useSelector(getFilterOffersByCity);
  const offersSort = useSelector(getOffersSort);
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
            onMouseEnter={(offerId) => setActiveOfferId(offerId)}
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
