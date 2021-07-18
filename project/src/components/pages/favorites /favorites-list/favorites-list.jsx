import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import CardList from '../../../elements-page/offers/card-list/card-list';
import {getOffersFavorite, getOffersFavoriteData} from '../../../../store/reducer/data/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {AppRoute} from '../../../../const';
import {fetchFavoriteOffers} from '../../../../store/api-actions';
import {isCheckedAuth} from '../../../../utils';
import LoadingScreen from '../../loading-screen/loading-screen';
import {getAuthorizationStatus} from '../../../../store/reducer/user/selectors';

function FavoritesList() {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offers = useSelector(getOffersFavorite);
  const isOffersFavoriteLoaded = useSelector(getOffersFavoriteData);

  const favoriteOffersGroupedByCityName = offers
    .filter((offer) => offer.isFavorites === true)
    .reduce((allOffers, offer) => {
      const cityName = offer.city.name;
      allOffers[cityName] = [...(allOffers[cityName] || []), offer];
      return allOffers;
    }, {});

  const [, setActiveOfferId] = useState(0);

  const loadFavoriteOffers = useCallback(
    () => dispatch(fetchFavoriteOffers()),
    [dispatch],
  );

  useEffect(() => {
    loadFavoriteOffers();
  }, [loadFavoriteOffers]);


  if (isCheckedAuth(authorizationStatus) || !isOffersFavoriteLoaded) {
    return (
      <LoadingScreen/>
    );
  }

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
                  onMouseLeave={() => setActiveOfferId(0)}
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
