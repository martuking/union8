import * as React from 'react';

const ModalRow = (props) => {
	return (
		<div>
			<label>
				{props.header}
			</label>
			<span>
				{props.dataRecord}
			</span>
		</div>
	);
}

export default ModalRow;