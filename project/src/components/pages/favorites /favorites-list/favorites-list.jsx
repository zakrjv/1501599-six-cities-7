import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import CardList from '../../../elements-page/offers/card-list/card-list';
import {getOffersFavorite} from '../../../../store/reducer/data/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {AppRoute} from '../../../../const';
import {fetchFavoriteOffers} from '../../../../store/api-actions';

function FavoritesList() {
  const dispatch = useDispatch();
  const offers = useSelector(getOffersFavorite);
  const [, setActiveOfferId] = useState(0);
  // console.log(offers);
  const loadFavoriteOffers = useCallback(
    () => dispatch(fetchFavoriteOffers()),
    [dispatch],
  )

  useEffect(() => {
    loadFavoriteOffers();
  }, []);


  const favoriteOffersGroupedByCityName = offers
    // .filter((offer) => offer.isFavorites === true)
    .reduce((allOffers, offer) => {
      const cityName = offer.city.name;
      allOffers[cityName] = [...(allOffers[cityName] || []), offer];
      return allOffers;
    }, {});

  // console.log(favoriteOffersGroupedByCityName);

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
            {Object.keys(favoriteOffersGroupedByCityName).map((cityName) => {
              console.log(favoriteOffersGroupedByCityName[cityName]);
              return (
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
                  onMouseLeave={() => setActiveOfferId(0)}
                />
              </li>
            )})}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesList;
