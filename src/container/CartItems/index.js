import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAndDeleteCart, addNumberOfProducts, deleteNumberOfProducts } from '../../actions/AddAction'

class CartItems extends Component {
    
    deleteItem = (item) => {
        this.props.addAndDeleteCart(item)
    }

    incrementBtnClick = (item) => {
        this.props.addNumberOfProducts(item)
    }

    decrementBtnClick = (item) => {
        this.props.deleteNumberOfProducts(item)
    }

    componentWillMount() {
        // debugger
    }

    render() {
        // debugger
        return (
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
    addAndDeleteCart,
    addNumberOfProducts,
    deleteNumberOfProducts
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
