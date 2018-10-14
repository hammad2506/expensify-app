import { createStore, combineReducers } from 'redux';
import ExpensesReducer from '../reducers/expenses.js';
import FiltersReducer from '../reducers/filters.js';


const store = () => (
    createStore(combineReducers({
        expenses: ExpensesReducer,
        filters: FiltersReducer
    }))
);
export default store;
