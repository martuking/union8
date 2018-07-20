import React, { Component } from 'react';
import axios from 'axios';
import Table from "../components/Table";
import { Link } from 'react-router-dom';

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
      "",
      "",
      ""
    ]
    let data = this.state.gruas.map((g, i) => {
      return([
        g.marca,
        g.modelo,
        g.numeroSerie,
        <Link to={'/gruas/'+g._id} ><i className="fa fa-search"></i></Link>,
        <Link to={'/gruas/'+g._id} ><i className="fa fa-edit"></i></Link>,
        <Link to={'/gruas/'+g._id} ><i className="fa fa-remove"></i></Link>
      ]);
    });
    return (
      <div className="container">
        <h1 className="text-center">Listado de gruas</h1>
        <Table headers={headers} data={data} />
      </div>
    );
  }
}

export default GruaList;
