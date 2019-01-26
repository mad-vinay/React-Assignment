import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterIncrement, viewCart } from '../../actions/AddAction'

class Header extends Component {

  render() {
    return (
      <div className="headerStyle">
        <span>Shopping Cart</span>
        <Link className="cartWrapper" onClick={this.viewCart} to={{pathname:'/cartItem', state:{items: this.props.data.cartItems}}}>
          <span>Cart</span>
          <img alt="cart icon" src={require("../../assets/shopping-cart.png")}></img>
          <span className="count">{this.props.data.count}</span>
        </Link>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    counterIncrement,
    viewCart
  }, dispatch);
};

function mapStateToProps(state) {
  // console.log('mapStateToProps', state)
  return {
      data: state.default
  }
};

export default connect (mapStateToProps, matchDispatchToProps) (Header);
