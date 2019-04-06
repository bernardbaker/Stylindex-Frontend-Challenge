import React from 'react';
import { shallow } from 'enzyme';

import ApolloClient from "apollo-boost";
import { URI, client } from './Apollo';

describe('Apollo', () => {

    let uri = null;

    beforeEach(() => {
        uri = 'https://graphql-pokemon.now.sh'
    });

    it('client URI is correct', () => {
        expect(URI).toBe(uri)
    });
})
