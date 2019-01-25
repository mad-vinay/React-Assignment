import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    this.setState({count: this.props.cartItems.length});
  }

  componentWillReceiveProps(newProps) {
    this.setState({count: newProps.cartItems.length});
  }

  render() {
    return (
      <div className="headerStyle">
        <span>Shopping Cart</span>
        <label className="cartWrapStyle">          
          <Link className="cartButtonStyle" to={{pathname:'/cart'}}><span className="cartCountStyle">{this.state.count}</span></Link>        
        </label>      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.shopReducer.cartItems
  }
}

export default connect(mapStateToProps)(Header);