import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../elements-page/header/header';

function NotFound() {
  return (
    <section className="game">
      <Header />

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Go to main page</Link>
      </section>
    </section>
  );
}

export default NotFound;
