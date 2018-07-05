import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeBar from '../components/HomeBar';
import GruaList from '../views/GruaList';
import Persona from '../views/Personas';
import Home from '../views/Home';
import GruaCreate from '../views/GruaCreate';

class App extends Component {
  render() {
    return (
      <div>
        <HomeBar />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route path="/personas" component={Persona} />
          <Route path="/gruas" component={GruaList} />
          <Route path="/gruasCreate" component={GruaCreate} />
        </Switch>
      </div>
    );
  }
}

export default App;