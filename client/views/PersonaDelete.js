import React, { Component } from 'react';
import axios from 'axios';


class PersonaDelete extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {
			loading: true,
			persona: {}
		};
	}
	componentDidMount() {
		axios.get('/api/personas/' + this.props.match.params.id)
			.then(res => {
				this.setState({
					persona: res.data,
					loading: false
				})
			})
			.catch(console.error);
	}
	handleDelete(event) {
		event.preventDefault();
		axios.delete('/api/personas/' + this.props.match.params.id).then(
			window.location.href = '/personas'
		).catch(console.error);
	}
	render() {
		if (this.state.loading) {
			return ("Cargando...");
		}
		return (
			<div className="container">
				<h1 className="text-center">Eliminar Persona</h1>
				<div className="jumbotron">
					<legend> Apellido 1 </legend>
					<h6>{this.state.persona.apellido1}</h6>
					<hr />
					<legend> Apellido 2 </legend>
					<h6>{this.state.persona.apellido2}</h6>
					<hr />
					<legend> Nombre </legend>
					<h6>{this.state.persona.nombre}</h6>
					<hr />
					<legend> Rut </legend>
					<h6>{this.state.persona.rut}</h6>
					<hr />
					<legend> Cargo </legend>
					<h6>{this.state.persona.cargo}</h6>
					<button className="btn btn-primary" onClick={this.handleDelete}>Eliminar</button>
				</div>
			</div>
		);
	}
}

export default PersonaDelete;
