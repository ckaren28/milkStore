import React, { Component } from 'react';

import{ connect } from 'react-redux';
import {fetchProducts} from './state/products/actions';


// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Cart from './components/cartComponent/cart';

// Includes
import './Assets/css/default.min.css';

class App extends Component {

  componentWillMount(){
    this.props.fetchProducts();
  }

  render() {
    const{
      isProductsLoading,
      products,
    } = this.props;

    if(isProductsLoading){
      return <h2> Loading... </h2>
    }


    return (
      <h2>app title</h2>
    );
  }
}

const mapStateToProps = (state) =>({
  products: state.product.products,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
