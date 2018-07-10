import React, { Component } from 'react';
import Input from '../components/Input';
import axios from 'axios';
class GruaCreate extends Component {
	constructor(props) {
			super(props);
			this.changeMarca = this.changeMarca.bind(this);
			this.changeModelo = this.changeModelo.bind(this);
			this.changeNumeroSerie = this.changeNumeroSerie.bind(this);
			this.onSubmit = this.onSubmit.bind(this);
			this.state = {
				loading: true,
				marca:'',
				modelo:'',
				numeroSerie:''
			};
		}
	
	componentDidMount(){
		this.setState({
			loading: false
		});
	}

	changeMarca(event){
		this.setState({
			marca:event.target.value
		})
	}

	changeModelo(event){
		this.setState({
			modelo:event.target.value
		})
	}

	changeNumeroSerie(event){
		this.setState({
			numeroSerie:event.target.value
		})
	}

	onSubmit(event){
		let data = {
			numeroSerie: this.state.numeroSerie,
			marca: this.state.marca,
			modelo: this.state.modelo
		}
		event.preventDefault();
		axios.post('/api/gruas/create', data).then(
			window.location.href = '/gruas'
		).catch(console.error);
	}

	render() {
		if (this.state.loading) {
			return("Cargando...");
		}
		
		return (
		<div className="container">
			<h1 className="text-center">Agregar nueva grua</h1>
				<form className="jumbotron" onSubmit={this.onSubmit}>
					<Input label={"Marca"} data={this.changeMarca}/>
					<Input label={"Modelo"} data={this.changeModelo}/>
					<Input label={"N°Serie"} data={this.changeNumeroSerie}/>
					<button className="btn btn-primary" type="submit">Submit</button>
				</form>
		</div>
		);
	}
}

export default GruaCreate;
