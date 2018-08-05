import React, { Component } from 'react';
import PreviewModal from '../components/Modal';
class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	componentDidMount() {
		this.setState({
			loading: false
		})
	}
	render() {
		if (this.state.loading) {
			return ("Cargando...");
		}
		return (
			<div className="jumbotron">
				<h1 className="text-center">Bienvenido a la aplicacion de Union</h1>
				{/*<PreviewModal />*/}
			</div>
		);
	}
}

export default HomePage;
