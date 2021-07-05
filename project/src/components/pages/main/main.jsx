import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../../elements-page/header/header';
import placeCardProp from '../../../props/place-card.prop';
import CardList from '../../elements-page/offers/card-list/card-list';
import Map from '../../elements-page/map/map';
import CitiesList from '../../elements-page/cities/cities-list/cities-list';

function Main({offers, currentCity}) {
  const [activeOfferId, setActiveOfferId] = useState(0);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            currentCity={currentCity}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <CardList
                offers={offers}
                currentPage='main'
                hoverOnCard={(offerId) => setActiveOfferId(offerId)}

              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  offers={offers}
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
  offers: state.offers.filter((offer) => (offer.city.name === state.currentCity)),
});

// export default Main;
export default connect(mapStateToProps)(Main);
