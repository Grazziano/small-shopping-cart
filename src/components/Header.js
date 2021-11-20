import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="row block center">
          <div>
            <a href="#/"><h1>Small Shopping Cart</h1></a>
          </div>
          <div>
            <a href="#/cart">Cart</a> <a href="#/signin">SignIn</a>
          </div>
        </header>
      </div>
    )
  }
}
