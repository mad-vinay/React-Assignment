import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortby } from '../../actions/AddAction.js';


class SortBy extends Component {
	render() {
		return (
			this.props.data.sortby.map((value) =>
				<option key={value.id} value={value.option}>{value.name}</option>
			)
		);
	}
}

function matchDispatchToProps(dispatch) {
	console.log('matchDispatchToProps', dispatch)
	return bindActionCreators({
		sortby
	}, dispatch);
};
  
function mapStateToProps(state) {
	console.log('mapStateToProps', state)
	return {
		data: state.sortby
	}
};

SortBy.propTypes = {
    selectedValue: PropTypes.array.isRequired
};

export default connect (mapStateToProps, matchDispatchToProps) (SortBy);