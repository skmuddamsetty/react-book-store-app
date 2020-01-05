import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className='header'>
    <ul className='nav nav-pills nav-justified'>
      <li className='nav-item'>
        <h4>Book Store</h4>
      </li>
      <li class='nav-item'>
        <NavLink
          to='/'
          activeClassName='is-active'
          className='nav-link'
          exact={true}
        >
          Dashboard
        </NavLink>
      </li>
      <li class='nav-item'>
        <NavLink
          to='/add-book'
          activeClassName='is-active'
          className='nav-link'
          exact={true}
        >
          Add Book
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
