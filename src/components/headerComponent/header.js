import React, { Component } from 'react';

import{ Link } from 'react-router-dom';
var FA = require('react-fontawesome');



class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/"> LOGO </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/Products"> Products </Link></li>
            <li>
              <Link to="/Cart">  </Link></li>
            <li className="last"> <Link to="/Cart"> <FA name='shopping-bag' /> </Link></li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
