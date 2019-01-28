import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countUpdation, viewCart } from '../../actions/AddAction'

class Product extends Component {

  cartBtnClick = (item, e) => {

    item.isActive = !item.isActive
    let {itemsInCart, cartItems} = this.props.data;
    // if(itemsInCart.indexOf(item.id) < 0) {
      this.props.countUpdation([...itemsInCart, item.id])
      this.props.viewCart(item)
    // }
    // else {
    //   itemsInCart.splice(itemsInCart.indexOf(item.id), 1)
    //   this.props.countUpdation(itemsInCart)
    //   // cartItems.splice(cartItems.indexOf((cartItems.findIndex(x => x.id=item.id), 1)), 1)

    //   cartItems.splice(cartItems.indexOf(item.id), 1)
    //   this.props.viewCart(cartItems)
    // }
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
            <button className={item.isActive === false ? "buttonStyle" : "selectedStyle"} onClick = {this.cartBtnClick.bind(this, item)}>{item.isActive === false ? "Add to Cart" : "Added to Cart"}</button>
          </div>
        </li>
      )
    );
  }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    countUpdation,
    viewCart
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
