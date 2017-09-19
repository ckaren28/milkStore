import React, { Component } from 'react';

import{ Link } from 'react-router-dom';
var FA = require('react-fontawesome');



class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          LOGO
        </div>

        <nav>
          <ul>
            <li className="first"><Link to="/"> Home </Link></li>
            <li><Link to="/Products"> Products </Link></li>
            <li><Link to="/Cart"><FA name='shopping-bag' /></Link></li>

            <li className="last"><Link to="/Cart"> Contact </Link></li>
          </ul>
        </nav>


      </header>
    );
  }
}

export default Header;
