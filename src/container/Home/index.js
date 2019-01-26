import React, { Component } from 'react';
import Product from '../../component/Product'
import Sidebar from '../../component/Sidebar';
import SortBy from '../../component/SortBy';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { homepage, sizeFilter, updateFilter, priceFilter, clearFilter } from '../../actions/AddAction.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      clicked: false
    };
  }

  clearFilter = () => {
    // debugger
    this.props.updateFilter(this.props.data.products)
    this.props.clearFilter([this.props.data.selectedSize])
    this.setState({
      clicked: this.state.clicked === false ? true : false
    })
  }

  afterSetStateFinished() {
      this.props.priceFilter(this.state.selectedValue === "high to low" ? this.props.data.filteredArray.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)): this.props.data.filteredArray.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)))
  }

  handleChange = (event) => {
    this.setState({
      selectedValue: event.target.value
    }, () => {
        this.afterSetStateFinished();
    });
  }

  freeShippingFilter = () => {
    this.props.updateFilter(this.props.data.filteredArray.filter(item => item.shipping === "free shipping"))
  }

  render() {
      return (
      <div className="App">
        <div className="content-wrapper">
          <div className="sidebarWrapper">
            <h4>Sizes</h4>
            <button className="clearBtn" onClick={this.clearFilter}>Clear Filter</button>
            <Sidebar size={this.props.data.sizes} btnStyles={this.state.clicked === false ? "bgBlack" : "bgGreen"}/>
            <div className="freeShippingBtn" onClick={this.freeShippingFilter}>free shipping</div>
          </div>
          <div className="selectBoxWrapper">
            <span>Order By</span>
            <select className="selectboxStyle" value={this.props.data.sortby.option} onChange={this.handleChange}>
              <SortBy selectedValue={this.props.data.sortby} />
            </select>
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
    homepage,
    sizeFilter,
    updateFilter,
    priceFilter,
    clearFilter
  }, dispatch);
};

function mapStateToProps(state) {
  return {
      data: state.default,
  }
};

export default connect (mapStateToProps, matchDispatchToProps)(Home);
