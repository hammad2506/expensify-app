import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from 'enzyme';

test('Test snapshot for Loading Page', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
})