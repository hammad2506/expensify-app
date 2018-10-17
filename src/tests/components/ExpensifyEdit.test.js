import React from 'react';
import { shallow } from 'enzyme';
import { ExpensifyEdit } from '../../components/ExpensifyEdit';
import expenses from '../dummyData';

let wrapper, startEditExpense, history, startRemoveExpense;

beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <ExpensifyEdit 
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense}
            history={history} 
            expense={expenses[1]}
            />    
        )
});

test("Snapshot for Expnsify Edit Page", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Edit expense from expenses Page", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test("Remove expense from expenses Page", () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});