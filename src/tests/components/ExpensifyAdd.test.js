import React from 'react';
import { shallow } from 'enzyme';
import { ExpensifyAdd } from '../../components/ExpensifyAdd';
import expenses from '../dummyData';

let wrapper, history, addExpense;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push : jest.fn() }
    wrapper = shallow(<ExpensifyAdd addExpense={addExpense} history={history} />)
});


test("Expensify Add Page snapshot", () => {
    expect(wrapper).toMatchSnapshot();
});


test("Expensify onSubmit with data", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
