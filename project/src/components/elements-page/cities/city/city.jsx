import React from 'react';
import PropTypes from 'prop-types';

function City({city, isActive, onClick}) {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`}
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
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default City;
