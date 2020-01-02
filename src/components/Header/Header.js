import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Book Store</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>
      Dashboard
    </NavLink>
    <NavLink to='/add-book' activeClassName='is-active' exact={true}>
      Add Book
    </NavLink>
  </header>
);

export default Header;
