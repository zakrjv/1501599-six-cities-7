import React from 'react';
import Main from '../pages/main/main';
import PropTypes from 'prop-types';

function App({offersCount}) {
  return (
    <Main offersCount={offersCount} />
  );
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
