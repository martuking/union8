import * as React from 'react';

const Output = (props) => {
	return (
		<div className="jumbotron">
			<legend>
				{props.h}
			</legend>
			<hr />
			<h6>
				{props.d}
			</h6>
		</div>
	);
}

export default Output;