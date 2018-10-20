import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseSummary from './ExpenseSummary';
import FiltersList from './FiltersList';
import { connect } from 'react-redux';

const ExpensifyDashboard = (props) => {
    return(
    <div>
        <ExpenseSummary />
        <FiltersList />
        <ExpensesList />
    </div>
    );
};

const mapStateToProps = (state) => (
    {
        expenses: state.expenses
    }
);


export default connect(mapStateToProps)(ExpensifyDashboard);