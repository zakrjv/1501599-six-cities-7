import React from 'react';
import Header from '../../elements-page/header/header';
import CitiesList from '../../elements-page/cities/cities-list/cities-list';
import CitiesPlaces from './cities-places/cities-places';

function Main() {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList/>
        <CitiesPlaces/>
      </main>
    </div>
  );
}

export default Main;
