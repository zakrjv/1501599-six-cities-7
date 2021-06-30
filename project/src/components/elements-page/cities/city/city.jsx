import React from 'react';
import PropTypes from 'prop-types';

function City({city, currentCity, onClick}) {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${currentCity === city && 'tabs__item--active'}`}
        href="/#"
        onClick={onClick}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default City;
