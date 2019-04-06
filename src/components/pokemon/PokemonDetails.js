import React, { Component } from 'react';

import PokemonTypes from './PokemonTypes';
import Pokemon from './Pokemon';

import PropTypes from 'prop-types';

import { BrowserRouter as Router, Link } from "react-router-dom";

import './Pokemon.scss'

export const renderDetailType = (type) => {
    return <span className='detail-type'>{type}</span>
}

export const renderMoreInfoLabel = (type) => {
    return <span className='detail-more-info'>{type}</span>
}

export const renderMoreInfoLink = (props = {pokemon: null}, state = {id:null}) => {
    if( props.pokemon && props.pokemon.evolutions === null) return null;
    if( props.id !== state.id) return null;
    if( props.pokemon && props.pokemon.evolutions !== null && props.id === props.pokemon.id) return null;

    return (
        <Router>
            <Link to={`/more-info/${props.id}`} target='_blank'>More info</Link>
        </Router>
    )
}

export const renderBoldDetail = (type) => {
    return <span className='bold-detail-text'>{type}</span>
}

export const renderSmallDetail = (type) => {
    return <span className='small-detail-text'>{type}</span>
}

export const renderTypes = (props) => {
    let listItems = []
    for (let i = 0; i < props.types.length; i++) {
        listItems.push(
            <PokemonTypes
                key={`${props.id}-${props.name}-${props.types[i]}`}
                id={props.id}
                type={props.types[i]}
            />
        )
    }
    return listItems;
}

export const renderEvolutions = (props) => {
    if (props.pokemon && props.pokemon.evolutions && (props.showEvolutions && props.showEvolutions === true)) {
        return props.pokemon.evolutions.map((pokemon) => (
            <Pokemon key={pokemon.id} {...pokemon} showEvolutions={true} />
        ))
    }
    return null;
}

class PokemonDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: null,
            image: null,
            maxCP: null,
            maxHP: null,
            name: null,
            number: null,
            types: []
        }
    }

    static getDerivedStateFromProps(props = null, state = null) {
        if (props && props.pokemon) {
            return {
                id: props.pokemon.id,
                image: props.pokemon.image,
                maxCP: props.pokemon.maxCP,
                maxHP: props.pokemon.maxHP,
                name: props.pokemon.name,
                number: props.pokemon.number,
                types: props.pokemon.types
            };
        }

        if (props !== state) {
            return {
                id: props.id,
                image: props.image,
                maxCP: props.maxCP,
                maxHP: props.maxHP,
                name: props.name,
                number: props.number,
                types: props.types
            };
        }

        if(props === null && state === null) return null;
    }

    render() {
        return (
            <li
                key={this.state.name}
                className='pokemon-listing'
            >
                <img src={this.state.image} width={200} height={200} alt={this.state.name} />
                <div className='details'>
                    { renderDetailType('Name')}: {renderBoldDetail(this.state.name)}
                    <br />
                    <br />
                    { renderDetailType('Number')}: {this.state.number}
                    <br />
                    { renderDetailType('Max CP')}: {this.state.maxCP}
                    <br />
                    { renderDetailType('Max HP')}: {this.state.maxHP}
                    <br />
                    { renderDetailType('Types')}: <ul>{renderTypes(this.props)}</ul>
                    <br />
                    { renderDetailType('ID')}: {renderSmallDetail(this.state.id)}
                    <br />
                    { renderMoreInfoLabel(renderMoreInfoLink(this.props, this.state))}
                    <br />
                    { renderEvolutions(this.props)}
                </div>
            </li>
        )
    }

}

PokemonDetails.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    maxCP: PropTypes.number,
    maxHP: PropTypes.number,
    name: PropTypes.string,
    number: PropTypes.string,
    types: PropTypes.array,
}

PokemonDetails.defaultProps = {
    id: "UG9rZW1vbjowMDE=",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    maxCP: 951,
    maxHP: 1071,
    name: "Bulbasaur",
    number: "001",
    types: ["Grass", "Poison"],
}

export default PokemonDetails;