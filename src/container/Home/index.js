import React, { Component } from 'react';
import Product from '../../component/Product'
import Sidebar from '../../component/Sidebar';
import SortBy from '../../component/SortBy';
import './index.css';
import { connect } from 'react-redux';
import { getAllProducts, getAllSizes } from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: this.props.sizes,
      sortby: [
        { id: 1, option: 'high to low', name: 'High to Low' },
        { id: 2, option: 'low to hign', name: 'Low to High' },
      ],
      filteredArray: this.props.products,
    }

  }

  sizeFilter = (size) => {
    this.setState({
      filteredArray: this.props.products.filter(item => (
        item.size === size
      ))
    })
  }

  clearFilter = () => {
    this.setState({
      filteredArray: this.props.products
    })
  }

  afterSetStateFinished() {
    this.setState({
      filteredArray: this.state.selectedValue === "high to low" ? this.state.filteredArray.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)) : this.state.filteredArray.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    })
  }

  handleChange = (event) => {
    this.setState({
      selectedValue: event.target.value
    }, () => {
      this.afterSetStateFinished();
    });
  }
  componentDidMount() {
    this.props.recieveProducts(); 
    this.props.getSizes();
  }
  
  callBack=(products)=>{
    this.setState({ filteredArray: products });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ filteredArray: newProps.products });
    this.setState({ sizes: newProps.sizes })
  }

  render() {
    console.log("products",this.state.filteredArray)
    return (
      <div className="App">        
        <div className="content-wrapper">
          <div className="sidebarWrapper">
            <h4>Sizes</h4>
            <button className="clearBtn" onClick={this.clearFilter}>Clear Filter</button>
            <Sidebar handleChange={this.handleChange} sizeFilter={this.sizeFilter} size={this.state.sizes} />
          </div>
          <div className="selectBoxWrapper">
            <span>Order By</span>
            <select className="selectboxStyle" value={this.state.sortby.option} onChange={this.handleChange}>
              <SortBy selectedValue={this.state.sortby} />
            </select>
          </div>
          <div className="listwrap">
            <span className="productCount">{this.state.filteredArray.length} product(s) found</span>
            <ul className="">
              <Product product={this.state.filteredArray} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.shopReducer.products,
    sizes: state.shopReducer.sizes
  }
}

const mapDispatchToProps = dispatch => ({
  recieveProducts: () => dispatch(getAllProducts()),
  getSizes: () => dispatch(getAllSizes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
