import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CITIES} from '../../../../const';
import {changeCity} from '../../../../store/action';
import City from '../city/city';

function CitiesList({currentCity, onChangeCity}) {
  return (
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
  );
}

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  },
});

// export default CitiesList;
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
