import React, { Component } from 'react';
import{ connect } from 'react-redux';
import ProductGrid from './components/ProductGrid';
import Cart from './components/cartComponent';
import {fetchProducts} from './state/product/actions';
import { fetchCart } from './state/cart/actions';


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
      cart,
    } = this.props;

    if (isProductsLoading){
      return <h2>Loading ...</h2>;
    }

    return (
      <div>
        <h1> Shoppe </h1>
        <ProductGrid
          products = {products}
        />
        <h1> Cart </h1>
        <Cart cart={cart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isProductsLoading: state.product.isLoading,
  products: state.product.products,
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
