import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserNotLogged from './user-not-auth/user-not-logged';
import UserLogged from './user-logged/user-logged';
import {AuthorizationStatus} from '../../../const';

function Header({authorizationStatus}) {
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

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

// export {Header};
export default connect(mapStateToProps)(Header);
