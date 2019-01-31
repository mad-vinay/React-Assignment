import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProductCount } from '../../actions/AddAction';

class OrderDetail extends Component {
	render() {
		return (
            <div>
                <ul>
                    {
                        this.props.cartItems.map( item => 
                            <li>
                                <img alt="product img" className="imageStyle" src={item.url}></img> 
                                <span className="count">{item.count}</span>
                                <span>{item.price * item.count}</span>
                            </li>
                        )
                    }
                </ul>
                <div className="detailsContainer">
                    <h4>total Amount to be pais {this.props.totalAmount}</h4>
                </div>
            </div>
		);
	}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateProductCount
    }, dispatch);
  };
  
  function mapStateToProps(state) {
      debugger
    return {
        totalAmount: state.default.totalAmount,
        cartItems: state.default.cartItems
    }
  };
   
  export default connect (mapStateToProps, matchDispatchToProps) (OrderDetail);