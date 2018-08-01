import React, { Component } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

class ClienteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
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
			"Giro",
			"",
			"",
			"",
			"",
			""
		]
		let data = this.state.clientes.map((g, i) => {
			return ([
				g.nombre,
				g.rut,
				g.giro,
				<Link to={'/clientes/' + g._id} ><i className="fa fa-search"></i></Link>,
				<Link to={'/clientes/' + g._id + '/edit'} ><i className="fa fa-edit"></i></Link>,
				<Link to={'/clientes/' + g._id + '/delete'} ><i className="fa fa-remove"></i></Link>,
				<Link to={'/clientes/' + g._id + '/createOficina'} ><i className="fa fa-plus"></i> Oficina</Link>,
				<Link to={'/clientes/' + g._id + '/createPersonaForanea'} ><i className="fa fa-plus"></i> Persona Foranea</Link>
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