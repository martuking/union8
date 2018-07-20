import React, { Component } from 'react';
import axios from 'axios';


class ClienteShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cliente: {}
    };
  }
  componentDidMount() {
    axios.get('/api/clientes/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          cliente: res.data,
          loading: false
        })
      })
      .catch(console.error);
  }
  render() {
    if (this.state.loading) {
      return ("Cargando...");
    }
    return (
      <div className="container">
        <h1 className="text-center">Cliente</h1>
        <div className="jumbotron">
          <legend> Nombre </legend>
          <h6>{this.state.cliente.nombre}</h6>
          <hr />
          <legend> Rut </legend>
          <h6>{this.state.cliente.rut}</h6>
          <hr />
          <legend> Giro </legend>
          <h6>{this.state.cliente.giro}</h6>
        </div>
      </div>
    );
  }
}

export default ClienteShow;
