import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebar, updateFilter, sizeFilter } from '../../actions/AddAction.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedValue: '',
    };
  }

  sizeFilter = (size, e) => {
    let {selectedSize} = this.props.data;
    if(selectedSize.indexOf(size) < 0) {
      e.target.setAttribute("class", "bgGreen")
      this.props.sizeFilter([...selectedSize, size])
      this.updateFilteredData([...selectedSize, size])
    } else {
      e.target.setAttribute("class", "bgBlack")
      selectedSize.splice(selectedSize.indexOf(size), 1);
      this.props.sizeFilter(selectedSize)
      this.updateFilteredData(selectedSize)
    }
  }

  updateFilteredData = (selectedSize) => {
    
    let {products}=this.props.data;
    if(selectedSize.length) {
      this.props.updateFilter(products.filter(item =>(selectedSize.indexOf(item.size) !== -1)))
    }
    else {
      this.props.updateFilter(this.props.data.products)
    }
  }  
  
  render() {
    return (
      this.props.data.sizes.map(sizes => (
        <button 
          key={sizes.id} 
          className={`${sizes.size} ${this.props.btnStyles} bgBlack`} 
          onClick = { this.sizeFilter.bind(this, sizes.size)}
        >
            {sizes.size}
        </button>
      ))
    );
  }
}

function matchDispatchToProps(dispatch) {
  // console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    sidebar,
    sizeFilter,
    updateFilter,
  }, dispatch);
};

function mapStateToProps(state) {
  // console.log('mapStateToProps', state)
  return {
      data: state.default
  }
};


Sidebar.propTypes = {
    size: PropTypes.array.isRequired
};
export default connect (mapStateToProps, matchDispatchToProps)(Sidebar);
