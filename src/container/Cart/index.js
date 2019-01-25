import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import CartItem from '../../component/CartItem';

class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   componentWillMount() {
//     this.setState({count: this.props.cartItems.length});
//   }

//   componentWillReceiveProps(newProps) {
//     this.setState({count: newProps.cartItems.length});
//   }

  render() {
    return (
        <div className="cartContainer">
            <Link className="backButton" to={{pathname:'/'}}>Back to home</Link>
            <div className="cartContent">
                <CartItem cartItem={this.props.cartItems}/>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.shopReducer.cartItems
  }
}

export default connect(mapStateToProps)(Cart);