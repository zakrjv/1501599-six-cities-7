import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../../elements-page/header/header';
import {AppRoute} from '../../../const';
import CardList from '../../elements-page/offers/card-list/card-list';
import placeCardProp from '../../../props/place-card.prop';

function Favorites({offers}) {
  const [, setActiveOfferId] = useState(0);

  const favoriteOffersGroupedByCityName = offers
    .filter((offer) => offer.isFavorites === true)
    .reduce((allOffers, offer) => {
      const cityName = offer.city.name;
      allOffers[cityName] = [...(allOffers[cityName] || []), offer];
      return allOffers;
    }, {});

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">
              {Object.keys(favoriteOffersGroupedByCityName).map((cityName) => (
                <li className="favorites__locations-items" key={cityName}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link to={AppRoute.ROOT} className="locations__item-link">
                        <span>{cityName}</span>
                      </Link>
                    </div>
                  </div>

                  <CardList
                    offers={favoriteOffersGroupedByCityName[cityName]}
                    currentPage='favorites'
                    hoverOnCard={(offerId) => setActiveOfferId(offerId)}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

// export default Favorites;
export default connect(mapStateToProps)(Favorites);
