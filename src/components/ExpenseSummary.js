import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import visibleExpenses from '../selectors/getVisibleExpenses';
import getTotalAmount from '../selectors/get-total';

export const ExpenseSummary = ({ expenseCount, expenseAmount }) => {
    const expenseWord = expenseCount>1 ? 'expenses' : 'expense';
    const amount = numeral(expenseAmount/100).format('$0,0.00'); 
    return (
        <div>
           { expenseCount>0 ? <h2>{`Viewing ${expenseCount} ${expenseWord} totalling ${amount}`}</h2> : undefined }
        </div>      
    )
}

const mapStateToProps = (state) => {
    const filteredExpenses = visibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: filteredExpenses.length,
        expenseAmount: getTotalAmount(filteredExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);