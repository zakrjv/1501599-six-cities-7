import React from 'react';
import {CITIES} from '../../../../const';
import City from '../city/city';

function CitiesList() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <City
            key={city}
            city={city}
          />
        ))}
      </ul>
    </section>
  );
}
export default CitiesList;
