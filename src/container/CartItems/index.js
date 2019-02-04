import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAndDeleteCart, updateProductCount } from '../../actions/AddAction';
import {Link} from "react-router-dom";
// import {browserHistory} from 'react-router'

class CartItems extends Component {
    
    deleteItem = (item) => {
        this.props.addAndDeleteCart(item)
    }

    incrementBtnClick = (item) => {
        this.props.updateProductCount({item, type: 'increment'})
    }

    decrementBtnClick = (item) => {
        this.props.updateProductCount({item, type: 'decrement'})
    }

    render() {
        if(this.props.data.length) {
            return (
                <div>{
                    this.props.data.map(item =>
                        <li className='listStyle cartItems' key={item.id}>
                            <div className="imageWrap">
                                <img alt="product img" className="imageStyle" src={item.url}></img>                
                            </div>
                            <div className="prodDetails">
                                <p className="productName">{item.name}</p>
                                <p className="priceTag"><span>Price:</span> $ <span className="amount">{item.price * item.count}</span></p>
                                <div className="multipleProduct">
                                    <button className={item.count === 1 ? "inactiveBtn":"activeBtn"} onClick={this.decrementBtnClick.bind(this, item)}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={this.incrementBtnClick.bind(this, item)} >+</button>
                                </div>
                                <span className={ item.shipping===" " ? "paid-shipping" : "shippingText"}>{item.shipping}</span>
                                <p className="prodDescription">product description</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <button onClick={this.deleteItem.bind(this, item)} className="buttonStyle deleteItem">Remove from Cart</button>
                            </div>
                        </li>
                    )}
                    <div className="placeOrderBtnWrap">
                        <Link className="buttonStyle placeOrder" to={{pathname:'/orderDetails'}}>Place Order</Link>
                    </div>
                    <Link className="backButton" to={{pathname:'/'}}>Back to home</Link>
                </div>
            );
        }
        else {
            return(
                <div className="emptyCart">
                    <img alt="sad smiley" src={require("../../assets/sad.png")}></img>
                    <span>Cart is empty..!!</span>
                    <Link className="backButton" to={{pathname:'/'}}>Back to home</Link>
                </div>
            )
        }
    }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    addAndDeleteCart,
    updateProductCount,
  }, dispatch);
};

function mapStateToProps(state) {
    // debugger
  console.log('mapStateToProps', state)
  return {
      data: state.default.cartItems,
  }
};
 
export default connect (mapStateToProps, matchDispatchToProps) (CartItems);
