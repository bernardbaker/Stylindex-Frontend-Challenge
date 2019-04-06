import React, { Component } from 'react';
import './App.scss';

import { ApolloProvider } from 'react-apollo';
import { client } from './apollo/Apollo';

import Pokemons from './components/pokemon/Pokemons';
import PokemonMoreDetails from './components/pokemon/PokemonMoreDetails';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <ApolloProvider client={client}>
          <Router>
            <Route exact path="/" component={Pokemons} />
            <Route exact path="/more-info/:id" component={PokemonMoreDetails} />
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
