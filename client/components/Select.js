import React, { Component } from 'react';

class Select extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="form-group">
                <label for="Inputselect">{props.nombreLabel}</label>
                <select className="form-control" >
                    {this.props.opciones.map((opcion) =>
                        <option opciones={opcion} key={opcion.toString()} />
                    )}
                </select>
            </div>
        );
    }
}

export default Select;