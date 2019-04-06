import React from 'react';
import { shallow, mount } from 'enzyme';

import Pokemon from './Pokemon';

describe('Pokemon', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<Pokemon />)
        expect(wrapper).toMatchSnapshot();
    })

    it('allows us to set props', () => {
        const wrapper = mount(<Pokemon
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

        // test name
        expect(wrapper.props().name).toEqual('Bulbasaur');
        wrapper.setProps({ name: 'Charmander' });
        expect(wrapper.props().name).toEqual('Charmander');

        // test number
        expect(wrapper.props().number).toEqual("001");
        wrapper.setProps({ number: '004' });
        expect(wrapper.props().number).toEqual('004');

        // test types
        expect(wrapper.props().types).toEqual(["Grass", "Poison"]);
        wrapper.setProps({ types: ["Fire"] });
        expect(wrapper.props().types).toEqual(["Fire"]);

    });
})