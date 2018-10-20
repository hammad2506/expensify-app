import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import visibleExpenses from '../selectors/getVisibleExpenses';
import getTotalAmount from '../selectors/get-total';

export const ExpenseSummary = ({ expenseCount, expenseAmount }) => {
    const expenseWord = expenseCount>1 ? 'expenses' : 'expense';
    const amount = numeral(expenseAmount/100).format('$0,0.00'); 
    return (
        <div className='page-header'>
            <div className='content-container'>
                {   expenseCount>0 ? 
                    <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{amount}</span></h1> : 
                    undefined 
                }
                <Link className='button page-header__actions' to='/add'>Add Expense</Link>    
            </div>
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