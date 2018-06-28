import React, { Component } from 'react';
import axios from 'axios'
class GruaForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            campos: []
        };
    }

    componentDidMount(){
        axios.get('api/test')
        .then( res => {
            //console.log(campos);
            this.setState({
                campos: res.data
            });
        })
        .catch(console.error);
        console.log(campos);
    }

    render(){
        return (
            <div className="container">
                <h1>Datos Nueva Grua</h1>
                <form>

                </form>
            </div>
        );
    }
}

export default GruaForm;