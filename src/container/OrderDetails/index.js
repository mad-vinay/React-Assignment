import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProductCount } from '../../actions/AddAction';
import { Link } from 'react-router-dom'

class OrderDetail extends Component {
	render() {
        if(this.props.cartItems.length){
            return (
                <div>
                    <div className="orderDetails">
                        <h2>Order Details</h2>
                        <ul>
                            {
                                this.props.cartItems.map( item => 
                                    <li>
                                        <div className="productName">
                                            <img alt="product img" className="prodImg childStyle" src={item.url}></img> 
                                            <span>{item.name}</span>
                                        </div>
                                        <span className="countDetail childStyle">{item.count}</span>
                                        <span>x</span>
                                        <span className="priceDetail childStyle">${item.price}</span>
                                        <span>=</span>
                                        <span className="totalPrice childStyle">${item.price * item.count}</span>
                                    </li>
                                )
                            }
                        </ul>
                        <div className="detailsContainer">
                            <p><span>Total Amount to be paid</span><b> ${this.props.totalAmount}</b></p>
                        </div>
                        <Link className="backButton" to={{pathname:'/'}}>Back to home</Link>
                    </div>
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
    return bindActionCreators({
        updateProductCount
    }, dispatch);
  };
  
  function mapStateToProps(state) {
    return {
        totalAmount: state.default.totalAmount,
        cartItems: state.default.cartItems
    }
  };
   
  export default connect (mapStateToProps, matchDispatchToProps) (OrderDetail);