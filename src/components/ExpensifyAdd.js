import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class ExpensifyAdd extends React.Component {

    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
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
    addExpense : (expense) => dispatch(addExpense(expense)) 
});

export default connect(undefined, mapDispatchToProps)(ExpensifyAdd);