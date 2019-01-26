import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterIncrement } from '../../actions/AddAction'

class Product extends Component {


  cartBtnClick = () => {
    this.props.counterIncrement(this.props.data.count + 1)
  }

  render() {
    return (
      this.props.product.map(item =>
        <li className='listStyle' key={item.id}>
          <span className={ item.shipping===" " ? "paid-shipping" : "shippingText"}>{item.shipping}</span>
          <img alt="product img" className="imageStyle" src={item.url}></img>
          <p className="productName">{item.name}</p>
          <p>{item.price}</p>
          <div className="btnWrap">
            <Link className="buttonStyle" to={{pathname:'/details', state:{item}}}>Show More</Link>
            <button className="buttonStyle" onClick = {this.cartBtnClick}>Add to Cart</button>
          </div>
        </li>
      )
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


Product.propTypes = {
  product: PropTypes.array.isRequired
};
 
export default connect (mapStateToProps, matchDispatchToProps) (Product);
