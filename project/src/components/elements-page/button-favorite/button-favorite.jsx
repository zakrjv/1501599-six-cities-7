import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus, typeFavoriteButton} from '../../../const';
import clsx from 'clsx';
import {AppRoute} from '../../../const';

const getClassName = (type, isFavorites) => (
  `${isFavorites ? `${type}__bookmark-button--active` : ''} ${type}__bookmark-button button`
);

const getButtonText = (isFavorites) => (
  `${isFavorites ? 'In bookmarks' : 'To bookmarks'}`
);

function ButtonFavorite({isFavorites, typeButton = typeFavoriteButton.MAIN, authorizationStatus}) {
  const history = useHistory();

  const handleClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return history.push(AppRoute.LOGIN);
    }
  };

  return (
    <button
      className={getClassName(typeButton, isFavorites)}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={`${typeButton}__bookmark-icon`}
        width={clsx({
          '18': typeButton === typeFavoriteButton.MAIN,
          '31': typeButton === typeFavoriteButton.ROOM,
        })}
        height={clsx({
          '19': typeButton === typeFavoriteButton.MAIN,
          '33': typeButton === typeFavoriteButton.ROOM,
        })}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">
        ${getButtonText(isFavorites)}
      </span>
    </button>
  );
}

ButtonFavorite.propTypes = {
  isFavorites: PropTypes.bool.isRequired,
  typeButton: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

// export default ButtonFavorite;
export default connect(mapStateToProps)(ButtonFavorite);
