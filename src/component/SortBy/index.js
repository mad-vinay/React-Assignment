import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SortBy extends Component {
	render() {
		return (
			this.props.selectedValue.map((value) =>
				<option key={value.id} value={value.option}>{value.name}</option>
			)
		);
	}
}

SortBy.propTypes = {
    selectedValue: PropTypes.array.isRequired
};

export default SortBy;