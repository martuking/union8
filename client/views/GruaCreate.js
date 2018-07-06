import React, { Component } from 'react';
import Form from '../components/Form';
class GruaCreate extends Component {
	constructor(props) {
			super(props);
			this.state = {
				loading: true,
				gruaBody:{
					"marca":marca,
					"modelo":modelo,
					"numeroSerie":numeroSerie
				}
			};
		}
	
	componentDidMount(){
		this.setState({
			loading: false
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
			<Form data={labels} />
		</div>
		);
	}
}

export default GruaCreate;
