import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../const';
import {logout} from '../../../../store/api-actions';
import {getUserData} from '../../../../store/reducer/data/selectors';

function UserLogged() {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const onClick = () => dispatch(logout());

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          to={AppRoute.FAVORITES}
          className="header__nav-link header__nav-link--profile"
          data-testid="email-link"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={userData.avatarUrl} alt="user"/>
          </div>
          <span className="header__user-name user__name">{userData.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          to={AppRoute.ROOT}
          className="header__nav-link"
          onClick={onClick}
        >
          <span className="header__signout">
            Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default UserLogged;
