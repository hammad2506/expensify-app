import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class ExpensifyAdd extends React.Component {

    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/dashboard');
    }

    render(){
        return (
            <div>
                <h3>Welcome to the Add page</h3>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }  
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (expense) => dispatch(startAddExpense(expense)) 
});

export default connect(undefined, mapDispatchToProps)(ExpensifyAdd);