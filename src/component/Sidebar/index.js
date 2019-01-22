import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebar } from '../../actions/AddAction.js';

class Sidebar extends Component {
    
  render() {
    return (
      this.props.data.sizes.map(sizes => (
        <button key={sizes.id} className="sizeSelection" onClick={this.props.sizeFilter.bind(this, sizes.size)}>{sizes.size}</button>
      ))
    );
  }
}

function matchDispatchToProps(dispatch) {
  console.log('matchDispatchToProps', dispatch)
  return bindActionCreators({
    sidebar
  }, dispatch);
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
      data: state.sidebar
  }
};


Sidebar.propTypes = {
    size: PropTypes.array.isRequired
};
export default connect (mapStateToProps, matchDispatchToProps)(Sidebar);
