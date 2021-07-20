import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CITIES} from '../../../../const';
import {changeCity} from '../../../../store/action';
import City from '../city/city';
import {getCurrentCity} from '../../../../store/reducer/main/selectors';

function CitiesList() {
  const dispatch = useDispatch();
  const currentCity = useSelector(getCurrentCity);
  const onChangeCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <City
              key={city}
              city={city}
              isActive={currentCity === city}
              onClick={() => onChangeCity(city)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
