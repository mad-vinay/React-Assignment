import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterIncrement } from '../../actions/AddAction'

class Header extends Component {


  render() {
    return (
      <div className="headerStyle">
        <span>Shopping Cart</span>
        <div className="cartWrapper">
          <img src={require("../../assets/shopping-cart.png")}></img>
          <span>{this.props.data.count}</span>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    counterIncrement
  }, dispatch);
};

function mapStateToProps(state) {
  // console.log('mapStateToProps', state)
  return {
      data: state.default
  }
};

export default connect (mapStateToProps, matchDispatchToProps) (Header);
