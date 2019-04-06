import React from 'react'
import PropTypes from 'prop-types';

const PokemonTypes = (props) => {
    return (
        <li key={`${props.id}-${props.type}`}>{props.type}</li>
    )
}

PokemonTypes.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string
}

PokemonTypes.defaultProps = {
    id: "Id",
    type: "Type"
}

export default PokemonTypes;