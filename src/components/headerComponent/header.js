import React, { Component } from 'react';
import{ Link } from 'react-router-dom';

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
            // eslint-disable-next-line
            <li><Link to="/Products"> Products </Link></li>
            // eslint-disable-next-line
            <li className="last"><Link to="/"> Contact </Link></li>
          </ul>
        </nav>


      </header>
    );
  }
}

export default Header;
