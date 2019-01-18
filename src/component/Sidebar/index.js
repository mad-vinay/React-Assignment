import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Sidebar extends Component {
    
  render() {
    const {size, sizeFilter} = this.props;
    return (
      size.map(sizes => (
        <button key={sizes.id} className="sizeSelection" onClick={sizeFilter.bind(this, sizes.size)}>{sizes.size}</button>
      ))
    );
  }
}

Sidebar.propTypes = {
    size: PropTypes.array.isRequired
};
export default Sidebar;