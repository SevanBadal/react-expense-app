import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/" exact={true}>
          <h1>Expense App</h1>
        </Link>
        <Link className="button" id="git" to="https://github.com/SevanBadal">My github</Link>
      </div>
    </div>
  </header>
);

export default Header;
