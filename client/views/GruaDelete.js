import React, { Component } from 'react';
import axios from 'axios';


class GruaDelete extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {
			loading: true,
			grua: {}
		};
	}
	componentDidMount() {
		axios.get('/api/gruas/' + this.props.match.params.id)
			.then(res => {
				this.setState({
					grua: res.data,
					loading: false
				})
			})
			.catch(console.error);
	}
	handleDelete(event) {
		event.preventDefault();
		axios.delete('/api/gruas/' + this.props.match.params.id).then(
			window.location.href = '/gruas'
		).catch(console.error);
	}
	render() {
		if (this.state.loading) {
			return ("Cargando...");
		}
		return (
			<div className="container">
				<h1 className="text-center">Desea eliminar esta grua</h1>
				<div className="jumbotron">
					<legend> Marca </legend>
					<h6>{this.state.grua.marca}</h6>
					<hr />
					<legend> Modelo </legend>
					<h6>{this.state.grua.modelo}</h6>
					<hr />
					<legend> N°Serie </legend>
					<h6>{this.state.grua.numeroSerie}</h6>
					<button className="btn btn-primary" onClick={this.handleDelete}>Eliminar</button>
				</div>
			</div>
		);
	}
}

export default GruaDelete;
