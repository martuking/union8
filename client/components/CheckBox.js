import React, { Component } from 'react';

class CheckBox extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="form-check-inline">
				<input 
					type="checkbox" 
					className="form-check-input" 
					id={this.props.label}
					onChange={this.props.data}
				/>
				<label className="form-check-label" >{this.props.label}</label>				
			</div>
		);
	}
}

export default CheckBox;


