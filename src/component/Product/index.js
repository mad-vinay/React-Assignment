import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';

class Product extends Component {
  render() {
    return (
      products.map(item =>
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

function mapStatetoProps(state) {
  console.log(state)
  return {
    products: state.products
  }
}

Product.propTypes = {
  product: PropTypes.array.isRequired
};
 
export default connect(
  mapStatetoProps
)(Product);
