import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.table `
`;

const Cart = ({cart}) => (
  <Wrapper>
    <thead>
      <tr>
        <th> Item Name </th>
        <th> Item Price </th>
        <th> Item Quantity </th>
      </tr>
    </thead>
    <tbody>
      {cart.items.map(item => (
        <tr key={item.promroductId} >
        <td> Product name?? </td>
        <td> Product price?? </td>
        <td> {item.quantity} </td>
      </tr>
      ))}
    </tbody>
  </Wrapper>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
  })).isRequired,
}).isRequired,
};

export default Cart;
