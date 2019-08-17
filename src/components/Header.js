import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/" exact={true}>
          <h1>Expense App</h1>
        </Link>
        <a href="https://github.com/SevanBadal" target="_blank">
          <i id="git" className="button fab fa-github-square"></i>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
