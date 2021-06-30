import React, {useState} from 'react';
import {CITIES} from '../../../../const';
import City from '../city/city';

function CitiesList() {
  const [currentCity, setCurrentCity] = useState('Paris');

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <City
            key={city}
            city={city}
            currentCity={currentCity}
            onClick={() => setCurrentCity(city)}
          />
        ))}
      </ul>
    </section>
  );
}
export default CitiesList;
