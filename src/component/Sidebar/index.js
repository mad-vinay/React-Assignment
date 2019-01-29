import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebar, sizeFilter } from '../../actions/AddAction.js';

class Sidebar extends Component {

  sizeFilter = (size, e) => {
    this.props.sizeFilter(size)
  }

  render() {
    return (
      this.props.data.sizes.map(sizes => (
        <button 
          key={sizes.id} 
          className={sizes.isActive === true ? "activeStyle" : "btnStyles"}
          onClick = { this.sizeFilter.bind(this, sizes)}
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
