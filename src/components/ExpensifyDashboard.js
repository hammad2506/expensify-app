import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseSummary from './ExpenseSummary';
import FiltersList from './FiltersList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpensifyDashboard = (props) => {
    return(
    <div>
        <h3>Welcome to the main Dashboard !!! </h3>
        <ExpenseSummary />
        <FiltersList />
        <ExpensesList />
        <Link to='/add'>ADD Expense</Link>
    </div>
    );
};

const mapStateToProps = (state) => (
    {
        expenses: state.expenses
    }
);


export default connect(mapStateToProps)(ExpensifyDashboard);