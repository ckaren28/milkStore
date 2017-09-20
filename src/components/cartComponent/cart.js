import React, { Component } from 'react';

var FA = require('react-fontawesome');

class Cart extends Component {
  render() {
    return (
      <cart>

      <FA
         className='super-crazy-colors'
         name='shopping-cart'
         size='4x'
         style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
       />
      </cart>
    );
  }
}

export default Cart;
