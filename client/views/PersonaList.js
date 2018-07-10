import React, { Component } from 'react';
import Table from '../components/Table';
import axios from 'axios';
class Persona extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
			personas: []
    }
  }
  componentDidMount() {
		axios.get('/api/personas')
			.then(res => {
				this.setState({
          personas: res.data,
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
      //"Cod. Interno",
      "Apellido 1",
      "Apellido 2",
      "Nombre",
      "Rut",
      //"Domicilio",
      "Cargo",
      //"DP",
      //"Sexo",
      "Fecha Nacimiento",
      "Fecha Ingreso",
      "Sueldo Base",
      //"Estado Civil",
      //"% Comp",
      "AFP",
      "N°Cargas",
      "Isapre",
      //"Tramo",
      //"Monto Pactado"
    ]
    let data = this.state.personas.map((g, i) => {
      return([
        //g.cod,
        g.apellido1,
        g.apellido2,
        g.nombre,
        g.rut,
        //g.domicilio,
        g.cargo,
        //g.dp,
        //g.sexo,
        g.fechaNacimiento,
        g.fechaIngreso,
        g.sueldoBase,
        //g.estadoCivil,
        //g.porcentajeCom,
        g.afp,
        g.cargas,
        g.isapre,
        //g.tramo,
        //g.montoPactado

      ]);
    });
    return (
      <div>
        <h1 className="text-center">Listado de personas</h1>
        <Table headers={headers} data={data}/>
      </div>
    );
  }
}

export default Persona;
