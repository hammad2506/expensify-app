import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../dummyData';
import ExpenseListItem from '../../components/ExpenseListItem';

test("Testing Expense List with expense", () => {
    const wrapper =  shallow(<ExpenseListItem {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});
