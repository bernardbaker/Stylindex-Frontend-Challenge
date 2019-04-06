import React from 'react';
import renderer from 'react-test-renderer';

import PokemonMoreDetails, { QUERY } from './PokemonMoreDetails';

import { MockedProvider } from 'react-apollo/test-utils';

import wait from 'waait';

describe('PokemonMoreDetails', () => {

    const mocks = [
        {
            request: {
                query: QUERY(PokemonMoreDetails.defaultProps.match)
            },
            result: {
                "data": {
                    "pokemon": {
                        "id": "UG9rZW1vbjowMDE=",
                        "number": "001",
                        "name": "Bulbasaur",
                        "maxCP": 951,
                        "maxHP": 1071,
                        "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
                        "types": [
                            "Grass",
                            "Poison"
                        ],
                        "evolutions": [
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
                            }
                        ]
                    },
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
                query: QUERY(PokemonMoreDetails.defaultProps.match)
            },
            error: new Error('Error'),
        }

    ];

    it('renders without error', () => {
        renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PokemonMoreDetails {...PokemonMoreDetails.defaultProps} />
            </MockedProvider>
        );
    });

    it('should render loading state initially', () => {
        const component = renderer.create(
            <MockedProvider mocks={[]}>
                <PokemonMoreDetails />
            </MockedProvider>,
        );

        const tree = component.toJSON();
        expect(tree.children).toContain('Loading...');
    });

    it('should render error state', async () => {
        const component = renderer.create(
            <MockedProvider mocks={mocksError}>
                <PokemonMoreDetails />
            </MockedProvider>,
        );

        await wait(0);

        const p = component.root.findByType('p');
        expect(p.children).toContain('Error :(');
    });

    it('should have a pokemon as a child in the HTML unordered list', async () => {

        const component = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PokemonMoreDetails {...PokemonMoreDetails.defaultProps} />
            </MockedProvider>,
        );

        await wait(0);

        const ul = component.root.findByType('ul');
        expect(ul.children).toHaveLength(1);
    });

})