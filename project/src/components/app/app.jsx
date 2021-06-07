import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App({offersCount}) {
  return (
    <MainPage offersCount={offersCount} />
  );
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
