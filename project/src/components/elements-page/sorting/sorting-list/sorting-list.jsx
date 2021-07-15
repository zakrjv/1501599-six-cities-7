import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Options} from '../../../../const';
import PropTypes from 'prop-types';
import {changeSorting} from '../../../../store/action';
import {getCurrentOption} from '../../../../store/reducer/main/selectors';

function SortingList({isOpened, optionsRef}) {
  const currentOption = useSelector(getCurrentOption);
  const dispatch = useDispatch();
  const onChangeSorting = (option) => {
    dispatch(changeSorting(option));
  };

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
};

export default SortingList;
