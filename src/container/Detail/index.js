import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {          
            btnDisabled: false
        }    
    }

    addToCartHandler = (item) => {
        this.setState({btnDisabled: true});
        this.props.addToCart(item);
    }

	render() {
        const {item} = this.props.location.state;
		return (
            <div className="detailsContainer">
                <Link className="backButton" to={{pathname:'/'}}>Back to home</Link>
                <div className="detailContent">
                    <div className="detailBox">
                        <p>{item.name}</p>
                        <img alt="product" src={item.url}></img>
                        <h4>Price: {item.price}</h4>
                        <button className="buttonStyle addCartBtn" disabled={this.state.btnDisabled} onClick={() => this.addToCartHandler(item)}>Add to cart</button>
                    </div>
                </div>
            </div>
		);
	}
}



const mapStateToProps = (state) => {
    return {
        prodDetail: state.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);