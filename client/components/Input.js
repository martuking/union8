import  React,{ Component } from 'react';

class Input extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="form-group">
				<label><b>{this.props.label}</b></label>
				<input 
					type="text" 
					className="form-control" 
					id={this.props.label} 
					placeholder={this.props.label} 
					onChange={this.props.abc}
				/>
			</div>
		);
	}
}
	
export default Input
