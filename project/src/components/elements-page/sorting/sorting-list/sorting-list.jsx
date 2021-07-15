import React from 'react';
import {connect} from 'react-redux';
import {Options} from '../../../../const';
import PropTypes from 'prop-types';
import {changeSorting} from '../../../../store/action';

function SortingList({isOpened, optionsRef, currentOption, onChangeSorting}) {
  return (
    <ul
      className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}
      ref={optionsRef}
    >
      {
        Object.values(Options).map((option) => (
          <li
            key={option}
            className={`places__option ${option === currentOption && 'places__option--active'}`}
            tabIndex="0"
            onClick={() => onChangeSorting(option)}
          >
            {option}
          </li>
        ))
      }
    </ul>
  );
}

SortingList.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  optionsRef: PropTypes.object.isRequired,
  currentOption: PropTypes.string.isRequired,
  onChangeSorting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentOption: state.currentOption,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSorting(option) {
    dispatch(changeSorting(option));
  },
});

// export default SortingList;
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
