import React, { Component } from 'react';
import Product from '../../component/Product'
import Sidebar from '../../component/Sidebar';
import SortBy from '../../component/SortBy';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sizeFilter, priceFilter, clearFilter, freeShippingFilter } from '../../actions/AddAction.js';

class Home extends Component {

  clearFilter = () => {
    this.props.clearFilter()
  }

  priceFilter = (selectedValue) => {
    this.props.priceFilter(selectedValue)
  }

  freeShippingFilter = () => {
    this.props.freeShippingFilter()
  }

  render() {
      return (
      <div className="App">
        <div className="content-wrapper">
          <div className="sidebarWrapper">
            <h4>Sizes</h4>
            <button className="clearBtn" onClick={this.clearFilter}>Clear Filter</button>
            <Sidebar size={this.props.data.sizes}/>
            {/* <div className={this.props.data.freeShipiingActive === true ? "freeShippingBtnActivated" : "freeShippingBtn"} onClick={this.freeShippingFilter.bind(this)}>free shipping</div> */}
          </div>
          <div className="selectBoxWrapper">
            <span>Order By</span>
            <SortBy selectedValue={this.props.data.sortby} priceFilter={this.priceFilter}/>
          </div>
          <div className="listwrap">
            <span className="productCount">{this.props.data.filteredArray.length} product(s) found</span>
            <ul className="">
              <Product product={this.props.data.filteredArray}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    sizeFilter,
    priceFilter,
    clearFilter,
    freeShippingFilter
  }, dispatch);
};

function mapStateToProps(state) {
  return {
      data: state.default,
  }
};

export default connect (mapStateToProps, matchDispatchToProps)(Home);
