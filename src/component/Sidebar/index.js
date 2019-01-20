import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Sidebar extends Component {
    
  render() {
    console.log()
    return (
      this.props.size.map(sizes => (
        <button key={sizes.id} className="sizeSelection" onClick={this.props.sizeFilter.bind(this, sizes.size)}>{sizes.size}</button>
      ))
    );
  }
}

Sidebar.propTypes = {
    size: PropTypes.array.isRequired
};
export default Sidebar;
