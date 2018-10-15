import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';

test("snapshot of expense summary with 0 expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expenseAmount={20000}/>);
    expect(wrapper).toMatchSnapshot();
});

test("snapshot of expense summary with 1 expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseAmount={20000}/>);
    expect(wrapper).toMatchSnapshot();
});

test("snapshot of expense summary with multiple expenses", () => {
    const component = shallow(<ExpenseSummary expenseCount={3} expenseAmount={90000}/>);
    expect(component).toMatchSnapshot();
});