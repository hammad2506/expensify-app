import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test("Testing Header Component", () => {
    const wrapper =  shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});