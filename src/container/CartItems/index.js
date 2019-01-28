import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewCart, counterIncrement, countUpdation } from '../../actions/AddAction'

class CartItems extends Component {
    
    deleteItem = (item) => {
        debugger
        let {cartItems, itemsInCart} = this.props.data;
        this.props.counterIncrement(this.props.data.count - 1)
        cartItems.splice(cartItems.indexOf(item.id, 1))
        itemsInCart.splice(itemsInCart.indexOf(item.id, 1)) 
        this.props.countUpdation(itemsInCart)
        this.props.viewCart(cartItems)
        // console.log(item)
    }

    render() {
        const {items} = this.props.location.state;

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
                        <button onClick={this.deleteItem.bind(this, item)} className="buttonStyle deleteItem">Remove from Cart</button>
                    </div>
                </li>
            )
        );
    }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    viewCart,
    counterIncrement,
    countUpdation
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
