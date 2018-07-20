import React, { Component } from 'react';
import axios from 'axios';


class PersonaShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      persona: {}
    };
  }
  componentDidMount() {
    axios.get('/api/personas/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          persona: res.data,
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
        <h1 className="text-center">Persona</h1>
        <div className="jumbotron">
          <legend> Apellido 1 </legend>
          <h6>{this.state.persona.apellido1}</h6>
          <hr />
          <legend> Apellido 2 </legend>
          <h6>{this.state.persona.apellido2}</h6>
          <hr />
          <legend> Nombre </legend>
          <h6>{this.state.persona.nombre}</h6>
          <hr />
          <legend> Rut </legend>
          <h6>{this.state.persona.rut}</h6>
          <hr />
          <legend> Cargo </legend>
          <h6>{this.state.persona.cargo}</h6>
        </div>
      </div>
    );
  }
}

export default PersonaShow;
