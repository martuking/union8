import React, { Component } from 'react';
import axios from 'axios';


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
    return (
      <div className="container">
        <h1 className="text-center">Grua</h1>
        <div className="jumbotron">
          <legend> Marca </legend>
          <h6>{this.state.grua.marca}</h6>
          <hr/>
          <legend> Modelo </legend>
          <h6>{this.state.grua.modelo}</h6>
          <hr/>
          <legend> N°Serie </legend>
          <h6>{this.state.grua.numeroSerie}</h6>
        </div>
      </div>
    );
  }
}

export default GruaDetail;
