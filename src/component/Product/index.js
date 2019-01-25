import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Product extends Component {
  render() {
    return (
      this.props.product.map(item =>
        <li className='listStyle' key={item.id}>
          <span className={ item.shipping===" " ? "paid-shipping" : "shippingText"}>{item.shipping}</span>
          <Link to={{pathname:'/details', state:{item}}}>
            <img alt="product img" className="imageStyle" src={item.url}></img>
          </Link>
          <p className="productName">{item.name}</p>
          <p>{item.price}</p>
          <Link className="buttonStyle" to={{pathname:'/details', state:{item}}}>View More</Link>
        </li>
      )
    );
  }
}

Product.propTypes = {
  product: PropTypes.array.isRequired
};
export default Product;