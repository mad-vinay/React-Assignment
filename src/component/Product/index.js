import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productList } from '../../actions/AddAction.js';

class Product extends Component {
  render() {
    return (
      this.props.data.products.map(item =>
        <li className='listStyle' key={item.id}>
          <span className={ item.shipping===" " ? "paid-shipping" : "shippingText"}>{item.shipping}</span>
          <img alt="product img" className="imageStyle" src={item.url}></img>
          <p className="productName">{item.name}</p>
          <p>{item.price}</p>
          <Link className="buttonStyle" to={{pathname:'/details', state:{item}}}>Add to Cart</Link>
        </li>
      )
    );
  }
}

function matchDispatchToProps(dispatch) {
  console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    productList
  }, dispatch);
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
      data: state.productList
  }
};

Product.propTypes = {
  product: PropTypes.array.isRequired
};
 
export default connect (mapStateToProps, matchDispatchToProps)(Product);
