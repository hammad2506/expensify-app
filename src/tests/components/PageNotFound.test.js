import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

test("Testing PAGE NOT FOUND Component", () => {
    const wrapper =  shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});