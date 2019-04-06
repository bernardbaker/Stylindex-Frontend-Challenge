import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Pokemon from './Pokemon';

export const QUERY = gql`
{
    pokemons(first: 10) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
`;

export const Pokemons = () => (
  <Query
    query={QUERY}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ));
    }}
  </Query>
);

export default Pokemons;