import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme'

test("Should take correct snapshot", () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot();    
});

test("Should call login user function of Login Page", () => {
    const onLoginClick = jest.fn();
    const wrapper = shallow(<LoginPage loginUser = {onLoginClick} />)
    wrapper.find('button').simulate('click');
    expect(onLoginClick).toHaveBeenCalled();
});