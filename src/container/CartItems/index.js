import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewCart } from '../../actions/AddAction'

class CartItems extends Component {

  render() {
    const {items} = this.props.location.state; 
    console.log(items, '&&&&&&&&&&&&&&&&&&&&')   
    return (
        items.map(item =>
            <li className='listStyle cartItems' key={item.id}>
                <div className="imageWrap">
                    <img alt="product img" className="imageStyle" src={item.url}></img>                
                </div>
                <div className="prodDetails">
                    <p className="productName">{item.name}</p>
                    <p className="priceTag">{item.price}</p>
                    <span className={ item.shipping===" " ? "paid-shipping" : "shippingText"}>{item.shipping}</span>
                </div>
                <div>
                    <button className="buttonStyle">Place the Order</button>
                </div>
            </li>
          )
    );
  }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    viewCart
  }, dispatch);
};

function mapStateToProps(state) {
    // debugger
  // console.log('mapStateToProps', state)
  return {
      data: state.default
  }
};
 
export default connect (mapStateToProps, matchDispatchToProps) (CartItems);
