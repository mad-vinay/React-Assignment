import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterIncrement, countUpdation, viewCart } from '../../actions/AddAction'

class Product extends Component {

  constructor(){
    super();
    this.state = {
      isActive: false
    }
  }

  cartBtnClick = (item, e) => {
    // debugger
    let {itemsInCart, cartItems} = this.props.data;
    if(itemsInCart.indexOf(item.id) < 0) {
      e.target.setAttribute("class", "selectedStyle")
      e.target.innerText = "Added to Cart"
      this.props.counterIncrement(this.props.data.count + 1)
      this.props.countUpdation([...itemsInCart, item.id])
      this.props.viewCart([...cartItems, item])
    }
    else {
      e.target.setAttribute("class", "buttonStyle")
      e.target.innerText = "Add to Cart"
      this.props.counterIncrement(this.props.data.count - 1)
      itemsInCart.splice(itemsInCart.indexOf(item.id), 1)
      this.props.countUpdation(itemsInCart)
      cartItems.splice(cartItems.indexOf(item.id, 1))
      this.props.viewCart(cartItems)
    }
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
            <button className="buttonStyle" onClick = {this.cartBtnClick.bind(this, item)}>Add to Cart</button>
          </div>
        </li>
      )
    );
  }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    counterIncrement,
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
