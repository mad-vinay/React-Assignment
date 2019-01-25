import React, { Component } from 'react';
import './index.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addname } from '../../actions/AddAction.js';

class Header extends Component {

  // constructor(props) {
  //   super(props)
  //   // console.log(props)
  // }

  // onClick = () => {
  //   this.props.addname(this.props.data.text + 1)
  // }

  render() {
    return (
      <div className="headerStyle">
        {/* <span>{this.props.data.text}</span> */}
        {/* <button onClick={this.onClick}></button> */}
        <span>Shopping Cart</span>
      </div>
    );
  }
}

// function matchDispatchToProps(dispatch) {
//   console.log('matchDispatchToProps')
//   return bindActionCreators({
//       addname
//   }, dispatch);
// };

// function mapStateToProps(state) {
//   console.log('mapStateToProps', state)
//   return {
//       data: state.addname
//   }
// };
export default Header;
