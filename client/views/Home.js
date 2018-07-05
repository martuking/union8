import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personas: [],
			encabezados: []
		};
	}
	componentDidMount() {
		axios.get('/api/test')
			.then(res => {
				this.setState({
					encabezados: res.data
				})
			})
			.catch(console.error);
		axios.get('/api/personas')
			.then(res => {
				this.setState({
					personas: res.data
				})
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className="App">
				
			</div>
		);
	}
}

export default Home;