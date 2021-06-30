import React from 'react';
import PropTypes from 'prop-types';

function City({city}) {
  return (
    <li className="locations__item">
      <a
        className="locations__item-link tabs__item tabs__item--active"
        href="/#"
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

City.propTypes = {
  city: PropTypes.string.isRequired,
};

export default City;
