import React from 'react';
import {useSelector} from 'react-redux';
import Logo from '../logo/logo';
import UserNotLogged from './user-not-auth/user-not-logged';
import UserLogged from './user-logged/user-logged';
import {AuthorizationStatus} from '../../../const';
import {getAuthorizationStatus} from '../../../store/reducer/user/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.AUTH ? <UserLogged /> : <UserNotLogged />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
