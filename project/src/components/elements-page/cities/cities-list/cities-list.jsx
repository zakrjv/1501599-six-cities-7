import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CITIES} from '../../../../const';
import {ActionCreator} from '../../../../store/action';
import City from '../city/city';

function CitiesList({currentCity, changeCity}) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <City
            key={city}
            city={city}
            isActive={currentCity === city}
            onClick={() => changeCity(city)}
          />
        ))}
      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

// export default CitiesList;
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
