import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../const';
import {logout} from '../../../../store/api-actions';

function UserLogged({email, avatarUrl, onClick}) {
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt="user"/>
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link to={AppRoute.ROOT} className="header__nav-link">
          <span
            className="header__signout"
            onClick={onClick}
          >
            Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}

UserLogged.propTypes = {
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.userData.email,
  avatarUrl: state.userData.avatarUrl,
});

const mapDispatchToProps = {
  onClick: logout,
};

// export default UserLogged;
export default connect(mapStateToProps, mapDispatchToProps)(UserLogged);
