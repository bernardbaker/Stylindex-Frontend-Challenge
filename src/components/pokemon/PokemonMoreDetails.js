import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Pokemon from './Pokemon';

import PropTypes from 'prop-types';

export const QUERY = (match) => {
    return gql`
    {
        pokemon(id: "${match.params.id}") {
            id
            number
            name
            maxCP
            maxHP
            image
            types
            evolutions {
                id
                number
                name
                maxCP
                maxHP
                image
                types
            }
        }
    }`
}

export const PokemonMoreDetails = ( {match} ) => (
    <Query
        query={QUERY(match)}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return <Pokemon key={data.id} {...data} showEvolutions={true} />
        }}
    </Query>
)

PokemonMoreDetails.propTypes = {
    props: PropTypes.object
}

PokemonMoreDetails.defaultProps = {
    match: {
        params: {
            id: "UG9rZW1vbjowMDE=",
        }
    }
}

export default PokemonMoreDetails;