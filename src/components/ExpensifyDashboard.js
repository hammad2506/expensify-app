import React from 'react';
import ExpensesList from './ExpensesList';
import FiltersList from './FiltersList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpensifyDashboard = (props) => {
    return(
    <div>
        <h3>Welcome to the main Dashboard !!! </h3>
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