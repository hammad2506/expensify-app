import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyHelp from '../../components/ExpensifyHelp';

test("Testing Expensify Help Page Component", () => {
    const wrapper =  shallow(<ExpensifyHelp />);
    expect(wrapper).toMatchSnapshot();
});