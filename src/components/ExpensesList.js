import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/getVisibleExpenses'

export const ExpensesList = (props) => {
    return (
        <div>
            {props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    expenses: filterExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesList);