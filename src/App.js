import React, { Component } from 'react';

import{ connect } from 'react-redux';
import {fetchProducts} from './state/products/actions';




// Includes
import './Assets/css/default.min.css';

class App extends Component {
  componentWillMount(){
    this.props.fetchProducts();
  }

  render() {
    const{
      products,
    } = this.props;


    return (
      <div>
        <h1> shop </h1>
        {products.map(product => <h2>{product.name} </h2>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
