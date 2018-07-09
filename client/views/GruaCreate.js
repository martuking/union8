import React, { Component } from 'react';
import Form from '../components/Form';
class GruaCreate extends Component {
	constructor(props) {
			super(props);
			this.changeMarca = this.changeMarca.bind(this);
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

	render() {
		if (this.state.loading) {
			return("Cargando...");
		}
		const labels = [
			"Marca",
			"Modelo",
			"N°Serie",
		];
		return (
		<div className="container">
			<h1 className="text-center">Agregar Nueva Grua</h1>
			<Form data={labels} dfg={this.changeMarca} />
		</div>
		);
	}
}

export default GruaCreate;
