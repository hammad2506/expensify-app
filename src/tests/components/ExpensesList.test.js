import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesList } from '../../components/ExpensesList';
import expenses from '../dummyData';

test("Testing Expense List with expenses", () => {
    const wrapper =  shallow(<ExpensesList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test("Testing Expense List with NO expenses", () => {
    const wrapper =  shallow(<ExpensesList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});