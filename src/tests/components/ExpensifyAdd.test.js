import React from 'react';
import { shallow } from 'enzyme';
import { ExpensifyAdd } from '../../components/ExpensifyAdd';
import expenses from '../dummyData';

let wrapper, history, startAddExpense;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push : jest.fn() }
    wrapper = shallow(<ExpensifyAdd startAddExpense={startAddExpense} history={history} />)
});


test("Expensify Add Page snapshot", () => {
    expect(wrapper).toMatchSnapshot();
});


test("Expensify onSubmit with data", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});
