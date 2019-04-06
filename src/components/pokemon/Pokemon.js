import React from 'react';

import PokemonDetails from './PokemonDetails';

import PropTypes from 'prop-types';

export const Pokemon = (props) => {   

    return (
        <ul>
            <PokemonDetails {...props} />
        </ul>
    )
}

Pokemon.propTypes = {
    props: PropTypes.object
}

Pokemon.defaultProps = {
    id: "UG9rZW1vbjowMDE=",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    maxCP: 951,
    maxHP: 1071,
    name: "Bulbasaur",
    number: "001",
    types: ["Grass", "Poison"]
}

export default Pokemon;