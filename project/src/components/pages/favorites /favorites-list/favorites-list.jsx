import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AppRoute} from "../../../../const";
import CardList from '../../../elements-page/offers/card-list/card-list';
import {useSelector} from 'react-redux';
import {getOffers} from '../../../../store/reducer/data/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

function FavoritesList() {
  const offers = useSelector(getOffers);

  const [, setActiveOfferId] = useState(0);

  const favoriteOffersGroupedByCityName = offers
    .filter((offer) => offer.isFavorites === true)
    .reduce((allOffers, offer) => {
      const cityName = offer.city.name;
      allOffers[cityName] = [...(allOffers[cityName] || []), offer];
      return allOffers;
    }, {});

  if (Object.keys(favoriteOffersGroupedByCityName).length === 0) {
    return (
      <FavoritesEmpty/>
    );
  }

  return (
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
  );
}

export default FavoritesList;
