import React, { Component } from 'react';
import axios from 'axios';

import Table from "../components/Table";

class GruaList extends Component {
  constructor(props) {
		super(props);
		this.state = {
      loading: true,
			gruas: []
		};
	}
	componentDidMount() {
		axios.get('/api/gruas')
			.then(res => {
				this.setState({
          gruas: res.data,
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
      "Nº Serie",
      "Altura",
      "Pluma",
      "Empotrado",
      "Lastre"
    ]
    let data = this.state.gruas.map((g, i) => {
      return([
        g.marca,
        g.modelo,
        g.numeroSerie,
        g.configuraciones.altura,
        g.configuraciones.pluma,
        g.configuraciones.empotrado,
        g.configuraciones.lastre
      ]);
    });
    return (
      <div className="container">
        <h1 className="text-center">Listado de Gruas</h1>
        <Table headers={headers} data={data} />
      </div>
    );
  }
}

export default GruaList;
