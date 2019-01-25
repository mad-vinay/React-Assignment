import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';

class CartItem extends Component {
  render() {
    return (
      this.props.cartItem.map(item =>
        <li className='listStyle' key={item.id}>
          <Link to={{pathname:'/details', state:{item}}}>
            <img alt="product img" className="imageStyle" src={item.url}></img>
          </Link>
          <p className="productName">{item.name}</p>
          <button className="delBtn" onClick={() => this.props.deleteFromCart(item)}>Delete</button>
        </li>
      )
    );
  }
}

CartItem.propTypes = {
  cartItem: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.shopReducer.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (item) => {
            dispatch(deleteFromCart(item));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);