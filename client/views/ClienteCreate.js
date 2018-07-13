import React, { Component } from 'react';
import Input from '../components/Input';
import axios from 'axios';
class ClienteCreate extends Component {
	constructor(props) {
			super(props);
			this.changeNombre = this.changeNombre.bind(this);
			this.changeRut = this.changeRut.bind(this);
			this.changeGiro = this.changeGiro.bind(this);
			this.onSubmit = this.onSubmit.bind(this);
			this.state = {
				loading: true,
				nombre:'',
				rut:'',
				giro:''
			};
		}
	
	componentDidMount(){
		this.setState({
			loading: false
		});
	}

	changeNombre(event){
		this.setState({
			nombre:event.target.value
		})
	}

	changeRut(event){
		this.setState({
			rut:event.target.value
		})
	}

	changeGiro(event){
		this.setState({
			giro:event.target.value
		})
	}

	onSubmit(event){
		let data = {
			nombre: this.state.nombre,
			rut: this.state.rut,
			giro: this.state.giro
		}
		event.preventDefault();
		axios.post('/api/clientes/create', data).then(
			window.location.href = '/clientes'
		).catch(console.error);
	}

	render() {
		if (this.state.loading) {
			return("Cargando...");
		}
		
		return (
		<div className="container">
			<h1 className="text-center">Agregar nuevo cliente</h1>
				<form className="jumbotron" onSubmit={this.onSubmit}>
					<Input label={"Nombre"} data={this.changeNombre}/>
					<Input label={"Rut"} data={this.changeRut}/>
					<Input label={"Giro"} data={this.changeGiro}/>
					<button className="btn btn-primary" type="submit">Submit</button>
				</form>
		</div>
		);
	}
}

export default ClienteCreate;
