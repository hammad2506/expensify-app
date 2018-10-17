import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class ExpensifyEdit extends React.Component {
    
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit = {this.onSubmit}/>
                <div>
                    <button onClick = {this.onClick}> Delete </button>
                </div> 
            </div>

        );
    }
}

const mapStateToProps = (state, props) => ({
    expense : state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense : (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense : (id) => dispatch(startRemoveExpense({id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensifyEdit);