import React from 'react';

const TablaHover = ({encabezados, personas}) => (
    <table className="table table-hover">
        <thead>
            <tr>
                {encabezados.map((encabezado) =>
                    <th scope="col" key={encabezado.toString()}>{encabezado}</th>
                )}
            </tr>
        </thead>
        <tbody>
                {personas.map((persona) => 
                    <tr>    
                        <td key={persona._id.toString()}>{persona._id}</td>
                        <td key={persona.cod.toString()}>{persona.cod}</td>
                        <td key={persona.apellido1.toString()}>{persona.apellido1}</td>
                        <td key={persona.apellido2.toString()}>{persona.apellido2}</td>
                        <td key={persona.nombre.toString()}>{persona.nombre}</td>
                        <td key={persona.rut.toString()}>{persona.rut}</td>
                        <td key={persona.domicilio.toString()}>{persona.domicilio}</td>
                        <td key={persona.cargo.toString()}>{persona.cargo}</td>
                        <td key={persona.dp.toString()}>{persona.dp}</td>
                        <td key={persona.sexo.toString()}>{persona.sexo}</td>
                        <td key={persona.fechaNacimiento.toString()}>{persona.fechaNacimiento}</td>
                        <td key={persona.fechaIngreso.toString()}>{persona.fechaIngreso}</td>
                        <td key={persona.sueldoBase.toString()}>{persona.sueldoBase}</td>
                        <td key={persona.estadoCivil.toString()}>{persona.estadoCivil}</td>
                        <td key={persona.porcentajeCom.toString()}>{persona.porcentajeCom}</td>
                        <td key={persona.afp.toString()}>{persona.afp}</td>
                        <td key={persona.cargas.toString()}>{persona.cargas}</td>
                        <td key={"inval"}>{persona.inval}</td>
                        <td key={persona.isapre.toString()}>{persona.isapre}</td>
                        <td key={persona.tramo.toString()}>{persona.tramo}</td>
                        <td key={"dosPorciento"}>{persona.dosPorciento}</td>
                        <td key={"gratificacion"}>{persona.gratificacion}</td>
                        <td key={persona.montoPactado.toString()}>{persona.montoPactado}</td>
                        <td key={"porcentajeZona"}>{persona.porcentajeZona}</td>
                    </tr>
                )}
        </tbody>
    </table>
); 
  
export default TablaHover