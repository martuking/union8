import React, { Component } from 'react';
import Input from '../components/Input';
import CheckBox from '../components/CheckBox';
import axios from 'axios';
class PersonaEdit extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.changeCod = this.changeCod.bind(this);
		this.changeApellido1 = this.changeApellido1.bind(this);
		this.changeApellido2 = this.changeApellido2.bind(this);
		this.changeNombre = this.changeNombre.bind(this);
		this.changeRut = this.changeRut.bind(this);
		this.changeDomicilio = this.changeDomicilio.bind(this);
		this.changeCargo = this.changeCargo.bind(this);
		this.changeDp = this.changeDp.bind(this);
		this.changeSexo = this.changeSexo.bind(this);
		this.changeFechaNacimiento = this.changeFechaNacimiento.bind(this);
		this.changeFechaIngreso = this.changeFechaIngreso.bind(this);
		this.changeSueldoBase = this.changeSueldoBase.bind(this);
		this.changeEstadoCivil = this.changeEstadoCivil.bind(this);
		this.changePorcentajeCom = this.changePorcentajeCom.bind(this);
		this.changeAfp = this.changeAfp.bind(this);
		this.changeCargas = this.changeCargas.bind(this);
		this.changeIsapre = this.changeIsapre.bind(this);
		this.changeTramo = this.changeTramo.bind(this);
		this.changeMontoPactado = this.changeMontoPactado.bind(this);
		this.changeInvalidez = this.changeInvalidez.bind(this);
		this.changeDosPorciento = this.changeDosPorciento.bind(this);
		this.changeGratificacion = this.changeGratificacion.bind(this);
		this.changePorcentajeZona = this.changePorcentajeZona.bind(this);

		this.state = {
			loading: true,
			cod: '',
			apellido1: '',
			apellido2: '',
			nombre: '',
			rut: '',
			domicilio: '',
			cargo: '',
			dp: 0,
			sexo: '',
			fechaNacimiento: '',
			fechaIngreso: '',
			sueldoBase: 0,
			estadoCivil: '',
			porcentajeCom: 0,
			afp: '',
			cargas: 0,
			isapre: '',
			tramo: 0,
			montoPactado: 0,
			inval: false,
			dosPorciento: false,
			gratificacion: false,
			porcentajeZona: false
		};
	}

	componentDidMount() {
		this.setState({
			loading: false
		});
	}

	changeCod(event) {
		this.setState({
			cod: event.target.value
		});
	}

	changeApellido1(event) {
		this.setState({
			apellido1: event.target.value
		});
	}

	changeApellido2(event) {
		this.setState({
			apellido2: event.target.value
		});
	}

	changeNombre(event) {
		this.setState({
			nombre: event.target.value
		});
	}

	changeRut(event) {
		this.setState({
			rut: event.target.value
		});
	}

	changeDomicilio(event) {
		this.setState({
			domicilio: event.target.value
		});
	}

	changeCargo(event) {
		this.setState({
			cargo: event.target.value
		});
	}

	changeDp(event) {
		this.setState({
			dp: event.target.value
		});
	}

	changeSexo(event) {
		this.setState({
			sexo: event.target.value
		});
	}

	changeFechaNacimiento(event) {
		this.setState({
			fechaNacimiento: event.target.value
		});
	}

	changeFechaIngreso(event) {
		this.setState({
			fechaIngreso: event.target.value
		});
	}

	changeSueldoBase(event) {
		this.setState({
			sueldoBase: event.target.value
		});
	}

	changeEstadoCivil(event) {
		this.setState({
			estadoCivil: event.target.value
		});
	}
	
	changePorcentajeCom(event) {
		this.setState({
			porcentajeCom: event.target.value
		});
	}

	changeAfp(event) {
		this.setState({
			afp: event.target.value
		});
	}

	changeCargas(event) {
		this.setState({
			cargas: event.target.value
		});
	}

	changeIsapre(event) {
		this.setState({
			isapre: event.target.value
		});
	}

	changeTramo(event) {
		this.setState({
			tramo: event.target.value
		});
	}

	changeMontoPactado(event) {
		this.setState({
			montoPactado: event.target.value
		});
	}

	changeInvalidez(event) {
		this.setState({
			inval: event.target.checked
		});
	}

	changeDosPorciento(event) {
		this.setState({
			dosPorciento: event.target.checked
		});
	}

	changeGratificacion(event) {
		this.setState({
			gratificacion: event.target.checked
		});
	}

	changePorcentajeZona(event) {
		this.setState({
			porcentajeZona: event.target.checked
		});
	}

	onSubmit(event) {
		let data = {
			cod: this.state.cod,
			apellido1: this.state.apellido1,
			apellido2: this.state.apellido2,
			nombre: this.state.nombre,
			rut: this.state.rut,
			domicilio: this.state.domicilio,
			cargo: this.state.cargo,
			dp: this.state.dp,
			sexo: this.state.sexo,
			fechaNacimiento: this.state.fechaNacimiento,
			fechaIngreso: this.state.fechaIngreso,
			sueldoBase: this.state.sueldoBase,
			estadoCivil: this.state.estadoCivil,
			porcentajeCom: this.state.porcentajeCom,
			afp: this.state.afp,
			cargas: this.state.cargas,
			isapre: this.state.isapre,
			tramo: this.state.tramo,
			montoPactado: this.state.montoPactado,
			inval: this.state.inval,
			dosPorciento: this.state.dosPorciento,
			gratificacion: this.state.gratificacion,
			porcentajeZona: this.state.porcentajeZona

		}
		event.preventDefault();
		axios.put('/api/personas/'+ this.props.match.params.id, data).then(
			window.location.href = '/personas'
		).catch(console.error);
	}

	render() {
		if (this.state.loading) {
			return ("Cargando...");
		}

		return (
			<div className="container">
				<h1 className="text-center">Edite los datos de la persona</h1>
				<form className="jumbotron" onSubmit={this.onSubmit}>
					<Input label={"Codigo interno"} data={this.changeCod} type={"text"}/>
					<Input label={"Apellido 1"} data={this.changeApellido1} type={"text"}/>
					<Input label={"Apellido 2"} data={this.changeApellido2} type={"text"}/>
					<Input label={"Nombre"} data={this.changeNombre} type={"text"}/>
					<Input label={"Rut"} data={this.changeRut} type={"text"}/>
					<Input label={"Domicilio"} data={this.changeDomicilio} type={"text"}/>
					<Input label={"Cargo"} data={this.changeCargo} type={"text"}/>
					<Input label={"DP"} data={this.changeDp} type={"number"}/>
					<Input label={"Sexo"} data={this.changeSexo} type={"text"}/>
					<Input label={"Fecha de nacimiento"} data={this.changeFechaNacimiento} type={"date"}/>
					<Input label={"Fecha de ingreso"} data={this.changeFechaIngreso} type={"date"}/>
					<Input label={"Sueldo base"} data={this.changeSueldoBase} type={"number"}/>
					<Input label={"Estado civil"} data={this.changeEstadoCivil} type={"text"}/>
					<Input label={"Porcentaje complementario"} data={this.changePorcentajeCom} type={"number"}/>
					<Input label={"AFP"} data={this.changeAfp} type={"text"}/>
					<Input label={"N°Cargas"} data={this.changeCargas} type={"number"}/>
					<Input label={"Isapre"} data={this.changeIsapre} type={"text"}/>
					<Input label={"Tramo"} data={this.changeTramo} type={"number"}/>
					<Input label={"Monto pactado"} data={this.changeMontoPactado} type={"number"}/>
					<CheckBox label={"Invalidez"} data={this.changeInvalidez} type={"checkbox"}/>
					<CheckBox label={"Dos porciento adicional"} data={this.changeDosPorciento} type={"checkbox"}/>
					<CheckBox label={"Gratificacion"} data={this.changeGratificacion} type={"checkbox"}/>
					<CheckBox label={"Porcentaje zona"} data={this.changePorcentajeZona} type={"checkbox"}/>
					<button className="btn btn-primary" type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PersonaEdit;
