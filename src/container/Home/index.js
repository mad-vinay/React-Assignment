import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Product from '../../component/Product'
import Sidebar from '../../component/Sidebar';
import SortBy from '../../component/SortBy';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { homepage } from '../../actions/AddAction.js';

class Home extends Component {
  
  sizeFilter = (size) => {
    let {selectedSize} = this.props.data;
    if(selectedSize.indexOf(size) < 0) {
      this.setState({
        selectedSize: [...selectedSize, size]
      }, () => this.updateFilteredData());
    } else {
      selectedSize.splice(selectedSize.indexOf(size), 1);
      this.setState({
        selectedSize: selectedSize
      }, () => this.updateFilteredData());
    }
  }

  updateFilteredData = () => {
    let {products, selectedSize}=this.props.data;
    if(this.props.data.selectedSize.length) {
      this.setState({
        filteredArray: products.filter(item =>(
          selectedSize.indexOf(item.size) !== -1
        ))
      })
    }
    else {
      this.clearFilter();
    }
  }

  clearFilter = () => {
    this.setState({
      filteredArray: this.props.data.products
    })
  }

  afterSetStateFinished() {
    this.setState({
      filteredArray: this.props.dataselectedValue === "high to low" ? this.props.data.filteredArray.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)): this.props.data.filteredArray.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    })
  }

  handleChange = (event) => {
    this.setState({
      isActive: 'active',
      selectedValue: event.target.value
    }, () => {
        this.afterSetStateFinished();
    });
  }

  freeShippingFilter = () => {
    this.setState({
      filteredArray: this.props.data.filteredArray.filter(item => 
        item.shipping === "free shipping"
      )
    })
  }

  render() {
      return (
      <div className="App">
        <Header/>
        <div className="content-wrapper">
          <div className="sidebarWrapper">
            <h4>Sizes</h4>
            <button className="clearBtn" onClick={this.clearFilter}>Clear Filter</button>
            {/* <span>{this.state.selectedSize}</span> */}
            <Sidebar sizeFilter={this.sizeFilter} size={this.props.data.sizes}/>
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
        <Footer/>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    homepage
  }, dispatch);
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
      data: state.homepage
  }
};

export default connect (mapStateToProps, matchDispatchToProps)(Home);
