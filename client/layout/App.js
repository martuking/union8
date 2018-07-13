import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeBar from '../components/HomeBar';
import GruaList from '../views/GruaList';
import GruaCreate from '../views/GruaCreate';
import GruaDetail from '../views/GruaDetail';
import PersonaList from '../views/PersonaList';
import PersonaCreate from '../views/PersonaCreate';
import ClientesList from '../views/ClienteList';
import ClienteCreate from '../views/ClienteCreate';

class App extends Component {
  render() {
    return (
      <div>
        <HomeBar />
        <Switch >
          <Route exact path="/" component={GruaList} />
          <Route path="/personas" component={PersonaList} />
          <Route path="/personasCreate" component={PersonaCreate} />
          <Route path="/gruas" component={GruaList} />
          <Route path="/gruasCreate" component={GruaCreate} />
          <Route path="/gruasDetail" component={GruaDetail} />
          <Route path="/clientes" component={ClientesList} />
          <Route path="/clientesCreate" component={ClienteCreate} />
        </Switch>
      </div>
    );
  }
}

export default App;