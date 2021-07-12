import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../../elements-page/header/header';
import placeCardProp from '../../../props/place-card.prop';
import CardList from '../../elements-page/offers/card-list/card-list';
import Map from '../../elements-page/map/map';
import CitiesList from '../../elements-page/cities/cities-list/cities-list';
import SortingForm from '../../elements-page/sorting/sorting-form/sorting-form';
import {filtersOffersByCity} from '../../../utils';

function Main({offers, currentCity}) {
  const [activeOfferId, setActiveOfferId] = useState(0);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <CitiesList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <SortingForm/>

              <CardList
                currentPage='main'
                hoverOnCard={(offerId) => setActiveOfferId(offerId)}
                onMouseLeave={() => setActiveOfferId(0)}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  activeOfferId={activeOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(placeCardProp),
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: filtersOffersByCity(state.offers, state.currentCity),
});

// export default Main;
export default connect(mapStateToProps)(Main);
