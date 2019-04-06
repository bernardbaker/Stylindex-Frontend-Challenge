import React from 'react';
import { shallow, mount } from 'enzyme';

import
PokemonDetails,
{
    renderDetailType,
    renderBoldDetail,
    renderSmallDetail,
    renderMoreInfoLabel,
    renderMoreInfoLink,
    renderEvolutions
} from './PokemonDetails';

import Pokemon from './Pokemon';

describe('PokemonDetails', () => {

    it('should render correctly', () => {
        let wrapper = shallow(<PokemonDetails />)
        expect(wrapper).toMatchSnapshot()
    });

    it('allows us to set props', () => {
        const wrapper = mount(<PokemonDetails
            id={"UG9rZW1vbjowMDE="}
            image={"https://img.pokemondb.net/artwork/bulbasaur.jpg"}
            maxCP={951}
            maxHP={1071}
            name={"Bulbasaur"}
            number={"001"}
            types={["Grass", "Poison"]}
        />);
        // test id
        expect(wrapper.props().id).toEqual('UG9rZW1vbjowMDE=');
        wrapper.setProps({ id: 'UG9rZW1vbjowMDQ=' });
        expect(wrapper.props().id).toEqual('UG9rZW1vbjowMDQ=');

        // test image
        expect(wrapper.props().image).toEqual('https://img.pokemondb.net/artwork/bulbasaur.jpg');
        wrapper.setProps({ image: 'https://img.pokemondb.net/artwork/charmander.jpg' });
        expect(wrapper.props().image).toEqual('https://img.pokemondb.net/artwork/charmander.jpg');

        // test max cp
        expect(wrapper.props().maxCP).toEqual(951);
        wrapper.setProps({ maxCP: 841 });
        expect(wrapper.props().maxCP).toEqual(841);

        // test max hp
        expect(wrapper.props().maxHP).toEqual(1071);
        wrapper.setProps({ maxHP: 955 });
        expect(wrapper.props().maxHP).toEqual(955);

        // test NAME
        expect(wrapper.props().name).toEqual('Bulbasaur');
        wrapper.setProps({ name: 'Charmander' });
        expect(wrapper.props().name).toEqual('Charmander');

        // test number
        expect(wrapper.props().number).toEqual('001');
        wrapper.setProps({ number: '004' });
        expect(wrapper.props().number).toEqual('004');

        // test types
        expect(wrapper.props().types).toEqual(["Grass", "Poison"]);
        wrapper.setProps({ types: ["Fire"] });
        expect(wrapper.props().types).toEqual(["Fire"]);

    });

    it('should return a HTML span for a given detail type', () => {
        const detail = <span className='detail-type'>Name</span>;
        expect(renderDetailType('Name')).toEqual(detail);
    });

    it('should return a HTML span for a given bold detail type', () => {
        const detail = <span className='bold-detail-text'>Bold</span>;
        expect(renderBoldDetail('Bold')).toEqual(detail);
    });

    it('should return a HTML span for a given small detail type', () => {
        const detail = <span className='small-detail-text'>Small</span>;
        expect(renderSmallDetail('Small')).toEqual(detail);
    });

    it('should return a HTML span for a given detail link', () => {
        const link = <span className='detail-more-info'>Link</span>;
        expect(renderMoreInfoLabel('Link')).toEqual(link);
    });

    it('should return null for given props and state values', () => {
        expect(renderMoreInfoLink()).toEqual(null);
    });

    it('should return null for given props and state values', () => {
        const props = {
            pokemon: {
                evolutions: null
            }
        }
        expect(renderMoreInfoLink(props)).toEqual(null);
    });

    it('should return null for given props and state values', () => {
        const props = {
            pokemon: {
                evolutions: []
            },
            id: '0001'
        }
        const state = {
            id: '0002'
        }
        expect(renderMoreInfoLink(props, state)).toEqual(null);
    });

    it('should return null for given props and state values', () => {
        const props = {
            pokemon: {
                evolutions: [],
                id: '0001'
            },
            id: '0001'
        }
        const state = {
            id: '0002'
        }
        expect(renderMoreInfoLink(props, state)).toEqual(null);
    });

    it('should return a react router with for given props and state values', () => {
        const props = {
            pokemon: {
                evolutions: [
                    {}
                ],
                id: '0002'
            },
            id: '0001'
        }
        const state = {
            id: '0001'
        }
        const instance = renderMoreInfoLink(props, state)
        expect(renderMoreInfoLink(props, state)).toEqual(instance);
    });

    it('should return a pokemon', () => {
        const props = {
            pokemon: {
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
                evolutions: [
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
                    }
                ],
                "id": 'UG9rZW1vbjowMDE='
            },
            showEvolutions: true
        }
        const instance = renderEvolutions(props);

        expect(renderEvolutions(props)).toEqual(instance)
    });

    it('should return a single pokemon', () => {
        const props = {
            pokemon: {
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
                evolutions: [
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
                    }
                ],
                "id": 'UG9rZW1vbjowMDE='
            },
            showEvolutions: true
        }

        const wrapper = shallow(<Pokemon key={props.pokemon.id} {...props.pokemon} showEvolutions={true} />);

        expect(wrapper.length).toEqual(1)
    });

    it('should get the derived state from props', () => {
        const givenProps = {
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
        }

        const result = PokemonDetails.getDerivedStateFromProps(givenProps);

        expect(result).toEqual(givenProps);
    });

    it('should get the derived state from props', () => {
        const givenProps = {
            "id": undefined,
            "image": undefined,
            "maxCP": undefined,
            "maxHP": undefined,
            "name": undefined,
            "number": undefined,
            "types": undefined,
        }

        const result = PokemonDetails.getDerivedStateFromProps(givenProps);

        expect(result).toEqual(givenProps);
    });

    it(`should return null from the call to get derived 
        state from props when the props and state are the same`, () => {
            const givenProps = { foo: 'bar' }
            const givenState = {};
            const result = PokemonDetails.getDerivedStateFromProps(givenProps, givenState);

            const resultantState = {
                "id": undefined,
                "image": undefined,
                "maxCP": undefined,
                "maxHP": undefined,
                "name": undefined,
                "number": undefined,
                "types": undefined
            }

            expect(result).toEqual(resultantState)
        });

    it('should get the derived state from props', () => {
        const givenProps = {
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
                ]
            }
        }
        const givenState = {};
        const result = PokemonDetails.getDerivedStateFromProps(givenProps, givenState);

        expect(result).toEqual(givenProps.pokemon)
    });

    it(`should return null from the call to get derived 
        state from props when the props and state are null`, () => {
            const givenProps = null;
            const givenState = null;
            const result = PokemonDetails.getDerivedStateFromProps(givenProps, givenState);

            expect(result).toEqual(null);
        });
})