import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../elements-page/header/header';
import {AppRoute} from '../../../const';
import FavoritesList from './favorites-list/favorites-list';

function Favorites() {
  return (
    <div className="page">
      <Header/>
      <FavoritesList/>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
