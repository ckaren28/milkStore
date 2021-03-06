import React, { Component } from 'react';

const myProducts = {
  "product-1" : { "Name" : "Canned Unicorn Meat",   "Price" : "9.99"  },
  "product-2" : { "Name" : "Disappearing Ink Pen",  "Price" : "14.99" },
  "product-3" : { "Name" : "USB Rocket Launcher",   "Price" : "29.99" },
  "product-4" : { "Name" : "Airzooka Air Gun",      "Price" : "29.99" },
  "product-5" : { "Name" : "Star Trek Paper Clips", "Price" : "19.99" }
};


class Products extends Component {
  render() {
    return (

      <div className="container products">

        <div className="row">
          <div className="banner">
              MILKS.
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 each">
            1
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 each">
            2
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 each">
            3
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 each">
            4
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 each">
            5
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 each">
            6
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 each">
            7
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 each">
            8
          </div>
        </div>


      </div>
    );
  }
}

export default Products;
