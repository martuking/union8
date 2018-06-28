import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Grua from '../views/Gruas';
import Persona from '../views/Personas';
import Home from '../views/Home';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/personas" component={Persona} />
          <Route path="/gruas" component={Grua} />
        </Switch>
      </div>
        );
      }
    }
    
    export default App;
