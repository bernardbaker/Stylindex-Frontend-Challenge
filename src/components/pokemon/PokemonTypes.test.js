import React from 'react';
import { shallow, mount } from 'enzyme';

import PokemonTypes from './PokemonTypes';

describe('PokemonTypes', () => {
    
    it('should render correctly', () => {
        const wrapper = shallow(<PokemonTypes/>)
        expect(wrapper).toMatchSnapshot()
    });


    it('allows us to set props', () => {
        const wrapper = mount(<PokemonTypes
            id={"UG9rZW1vbjowMDE="}
            type={"Grass"}
        />);
        // test id
        expect(wrapper.props().id).toEqual('UG9rZW1vbjowMDE=');
        wrapper.setProps({ id: 'UG9rZW1vbjowMDQ=' });
        expect(wrapper.props().id).toEqual('UG9rZW1vbjowMDQ=');

        // test type
        expect(wrapper.props().type).toEqual("Grass");
        wrapper.setProps({ type: "Fire" });
        expect(wrapper.props().type).toEqual("Fire");

    });
    
})