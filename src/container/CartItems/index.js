import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewCart, deleteCart, countUpdation } from '../../actions/AddAction'

class CartItems extends Component {
    
    deleteItem = (item) => {
        item.isActive = !item.isActive
        let itemsInCart  = this.props.data;
        // cartItems.splice(cartItems.indexOf(item.id), 1)
        // itemsInCart.splice(itemsInCart.indexOf(item.id), 1);
        console.log("item", item)
        // this.props.countUpdation(itemsInCart);
        this.props.deleteCart(item)
    }

    render() {
        const items = this.props.data;

        return (
            items.map(item =>
                <li className='listStyle cartItems' key={item.id}>
                    <div className="imageWrap">
                        <img alt="product img" className="imageStyle" src={item.url}></img>                
                    </div>
                    <div className="prodDetails">
                        <p className="productName">{item.name}</p>
                        <p className="priceTag"><span>Price:</span> {item.price}</p>
                        <span className={ item.shipping===" " ? "paid-shipping" : "shippingText"}>{item.shipping}</span>
                        <p className="prodDescription">product description</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
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
    countUpdation,
    deleteCart
  }, dispatch);
};

function mapStateToProps(state) {
    // debugger
  console.log('mapStateToProps', state)
  return {
      data: state.default.cartItems
  }
};
 
export default connect (mapStateToProps, matchDispatchToProps) (CartItems);
