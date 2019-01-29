import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class SortBy extends Component {
	render() {
		return (
			this.props.data.sortby.map((value) =>
				<option key={value.id} value={value.option}>{value.name}</option>
			)
		);
	}
}
  
function mapStateToProps(state) {
	return {
		data: state.default
	}
};

SortBy.propTypes = {
    selectedValue: PropTypes.array.isRequired
};

export default connect (mapStateToProps) (SortBy);