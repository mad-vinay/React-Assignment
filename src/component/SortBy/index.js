import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class SortBy extends Component {
	render() {
		return (
			<select className="selectboxStyle" value={this.props.data.sortby.option} onChange={this.props.priceFilter}>
				<option>select</option>
				{
					this.props.data.sortby.map((value) =>
						<option key={value.id} value={value.option}>{value.name}</option>
					)
				}
			</select>
		);
	}
}
{/* <select className="selectboxStyle" value={this.props.data.sortby.option} onChange={this.priceFilter}>
              <SortBy selectedValue={this.props.data.sortby} />
            </select> */}
  
function mapStateToProps(state) {
	return {
		data: state.default
	}
};

SortBy.propTypes = {
    selectedValue: PropTypes.array.isRequired
};

export default connect (mapStateToProps) (SortBy);