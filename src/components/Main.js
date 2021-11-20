import React, { Component } from 'react'
import Product from './Product';

export default class Main extends Component {
  render() {
    const { products } = this.props;
    return (
      <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
          {products.map((product) => (
            <Product key={ product.id } product={ product } />
          ))}
        </div>
      </main>
    )
  }
}
