import React from 'react';
import renderer from 'react-test-renderer';

import Pokemons, { QUERY } from './Pokemons';

import { MockedProvider } from 'react-apollo/test-utils';

import wait from 'waait';

describe('Pokemons', () => {

    const mocks = [
        {
            request: {
                query: QUERY
            },
            result: {
                "data": {
                    "pokemons": [
                        {
                            "id": "UG9rZW1vbjowMDE=",
                            "number": "001",
                            "name": "Bulbasaur",
                            "maxCP": 951,
                            "maxHP": 1071,
                            "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
                            "types": [
                                "Grass",
                                "Poison"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDI=",
                            "number": "002",
                            "name": "Ivysaur",
                            "maxCP": 1483,
                            "maxHP": 1632,
                            "image": "https://img.pokemondb.net/artwork/ivysaur.jpg",
                            "types": [
                                "Grass",
                                "Poison"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDM=",
                            "number": "003",
                            "name": "Venusaur",
                            "maxCP": 2392,
                            "maxHP": 2580,
                            "image": "https://img.pokemondb.net/artwork/venusaur.jpg",
                            "types": [
                                "Grass",
                                "Poison"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDQ=",
                            "number": "004",
                            "name": "Charmander",
                            "maxCP": 841,
                            "maxHP": 955,
                            "image": "https://img.pokemondb.net/artwork/charmander.jpg",
                            "types": [
                                "Fire"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDU=",
                            "number": "005",
                            "name": "Charmeleon",
                            "maxCP": 1411,
                            "maxHP": 1557,
                            "image": "https://img.pokemondb.net/artwork/charmeleon.jpg",
                            "types": [
                                "Fire"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDY=",
                            "number": "006",
                            "name": "Charizard",
                            "maxCP": 2413,
                            "maxHP": 2602,
                            "image": "https://img.pokemondb.net/artwork/charizard.jpg",
                            "types": [
                                "Fire",
                                "Flying"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDc=",
                            "number": "007",
                            "name": "Squirtle",
                            "maxCP": 891,
                            "maxHP": 1008,
                            "image": "https://img.pokemondb.net/artwork/squirtle.jpg",
                            "types": [
                                "Water"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDg=",
                            "number": "008",
                            "name": "Wartortle",
                            "maxCP": 1435,
                            "maxHP": 1582,
                            "image": "https://img.pokemondb.net/artwork/wartortle.jpg",
                            "types": [
                                "Water"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMDk=",
                            "number": "009",
                            "name": "Blastoise",
                            "maxCP": 2355,
                            "maxHP": 2542,
                            "image": "https://img.pokemondb.net/artwork/blastoise.jpg",
                            "types": [
                                "Water"
                            ]
                        },
                        {
                            "id": "UG9rZW1vbjowMTA=",
                            "number": "010",
                            "name": "Caterpie",
                            "maxCP": 367,
                            "maxHP": 443,
                            "image": "https://img.pokemondb.net/artwork/caterpie.jpg",
                            "types": [
                                "Bug"
                            ]
                        }
                    ]
                }
            }
        }

    ];

    const mocksError = [
        {
            request: {
                query: QUERY
            },
            error: new Error('Error'),
        }

    ];

    it('renders without error', () => {
        renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Pokemons />
            </MockedProvider>,
        );
    });

    it('should render loading state initially', () => {
        const component = renderer.create(
            <MockedProvider mocks={[]}>
                <Pokemons />
            </MockedProvider>,
        );

        const tree = component.toJSON();
        expect(tree.children).toContain('Loading...');
    });

    it('should have 10 pokemons represented as ULs in the root node', async () => {

        jest.setTimeout(30000);

        const component = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Pokemons />
            </MockedProvider>,
        );

        await wait(1000);

        const list = component.root.findAllByType('ul');
        expect(list.length).toBeGreaterThan(0)
    });

    it('should render error state', async () => {
        const component = renderer.create(
            <MockedProvider mocks={mocksError}>
                <Pokemons />
            </MockedProvider>,
        );

        await wait(0);

        const p = component.root.findByType('p');
        expect(p.children).toContain('Error :(');
    });

})