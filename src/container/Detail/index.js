import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Detail extends Component {
	render() {
        const {item} = this.props.location.state;
		return (
            <div className="detailsContainer">
                <Link className="backButton" to={{pathname:'/'}}>Back to home</Link>
                <div className="detailContent">
                    <div className="detailBox">
                        <p>{item.name}</p>
                        <img alt="product" src={item.url}></img>
                    </div>
                    <div className="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h4>Price: <span>${item.price}</span></h4>
                    </div>
                </div>
            </div>
		);
	}
}

export default Detail;