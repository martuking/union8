import React, { Component } from 'react';

class Input2 extends Component {
	contructor(props) {
		super(props);
		this.state = {
			inputValues: []
		};
	}

	handleChange(e){
		inputValues.push(e.target.value);
	}

	render() {
		return (
			<div className="form-group">
				<label for={props.label}><b>{props.label}</b></label>
				<input
					type="text"
					className="form-control"
					id={props.label}
					placeholder={props.label}
					value
				/>
			</div>
		);
	}
}

export default Input2