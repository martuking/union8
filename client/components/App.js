import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import VistaPreviaPersonas from './VistaPreviaPersonas';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      personas:[]
    };
  }

  componentDidMount(){
    axios.get('api/personas')
      .then(res => {
        this.setState({
          personas: res.data
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Union App</h1>
        </header>
        <div>
          {this.state.personas.map(data => 
              <VistaPreviaPersonas key={data._id} {...data} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
