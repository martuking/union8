import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="form-group">
                <label for={this.props.campoModelo}>{this.props.campoModelo}</label>
                <input type={this.props.campoModelo} className="form-control" id={this.props.campoModelo} placeholder={this.props.campoModelo}/>
            </div>
        ); 
    }
}

export default Input;