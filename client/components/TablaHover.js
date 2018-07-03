import React from 'react';

const TablaHover = ({encabezados}) => (
    <table className="table table-hover">
        <thead>
            <tr>
                {encabezados.map((encabezado) =>
                    <th scope="col" key={encabezado.toString()}>{encabezado}</th>
                )}
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
); 
  
export default TablaHover