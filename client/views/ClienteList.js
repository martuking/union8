import React, { Component } from 'react';
import axios from 'axios';
import Table from '../components/Table';

class ClienteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading : true,
			clientes: []
		};
	}

	componentDidMount() {
		axios.get('/api/clientes')
			.then(res => {
				this.setState({
					clientes: res.data,
					loading: false
				})
			})
			.catch(console.error);
	}

	render() {
		if (this.state.loading) {
			return ("Cargando...");
		}
		const headers = [
			"Nombre",
			"Rut",
			"Giro"
		]
		let data = this.state.clientes.map((g, i) => {
			return ([
				g.nombre,
				g.rut,
				g.giro
			]);
		});
		return (
			<div className="container">
				<h1 className="text-center">Listado de clientes</h1>
				<Table headers={headers} data={data} />
			</div>
		);
	}
}

export default ClienteList