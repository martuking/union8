import React, { Component } from 'react';
import axios from 'axios';
import Output from '../components/Output';

class GruaDetail extends Component {
  constructor(props) {
		super(props);
		this.state = {
      loading: true,
			grua: {}
		};
	}
	componentDidMount() {
		axios.get('/api/gruas/5b286f3b3bbc6d14f4f3aee8')
			.then(res => {
				this.setState({
          grua: res.data,
          loading: false
				})
			})
			.catch(console.error);
	}
  render() {
    if (this.state.loading) {
      return("Cargando...");
    }
    const headers = [
      "Marca",
      "Modelo",
      "Nº Serie"
    ]
    let data = [
      this.state.grua.marca,
      this.state.grua.modelo,
      this.state.grua.numeroSerie
    ]
    return (
      <div className="container">
        <h1 className="text-center">Grua</h1>
        <div>
          
        </div>
      </div>
    );
  }
}

export default GruaDetail;
