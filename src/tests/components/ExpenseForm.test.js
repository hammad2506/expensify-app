import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import expenses from '../dummyData';
import moment from 'moment';


test("Snapshot for Expense form without any data", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("Snapshot for Expense form with data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});


test("Test form for invalid submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('Please enter the description and amount');
    expect(wrapper).toMatchSnapshot();
});


test("Test form description change", () => {
    const value = 'Updated Description';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test("Test form Note change", () => {
    const value = 'Updated Note';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test("Test form on correct amount change", () => {
    const value = '237.93';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test("Test form on incorrect amount change", () => {
    const value = '2.520';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test("Test on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test("Test form for Valid submission", () => {
    const onFormSubmit = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onFormSubmit}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(wrapper).toMatchSnapshot();
    expect(onFormSubmit).toHaveBeenLastCalledWith({
        description: expenses[1].description, 
        note: expenses[1].note, 
        amount: expenses[1].amount, 
        createdAt: expenses[1].createdAt
    });
});