import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import SortingList from '../sorting-list/sorting-list';
import {getCurrentOption} from '../../../../store/reducer/main/selectors';

function SortingForm() {
  const currentOption = useSelector(getCurrentOption);
  const [isOpened, setIsOpened] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    const documentClick = (evt) => {
      if (evt.target.parentElement !== optionsRef.current || evt.keyCode === 27) {
        setIsOpened(false);
      }
    };

    isOpened && document.addEventListener('click', documentClick);
    isOpened && document.addEventListener('keydown', documentClick);

    return () => {
      isOpened && document.removeEventListener('click', documentClick);
      isOpened && document.removeEventListener('keydown', documentClick);
    };
  }, [isOpened]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setIsOpened(!isOpened)}
      >
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <SortingList
        isOpened={isOpened}
        optionsRef={optionsRef}
      />
    </form>
  );
}

export default SortingForm;
