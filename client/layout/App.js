import React, { Component } from 'react';
import axios from 'axios';
import Input from '../components/Input';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      campos: []
    };
  }

  componentDidMount(){
    axios.get('/api/test')
    .then( res => {
      this.setState({
        campos: res.data
      })
    })
    .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.campos.map((campo) =>
            <Input campoModelo={campo} key={campo.toString()} />
          )}
        </div>
      </div>
        );
      }
    }
    
    export default App;
