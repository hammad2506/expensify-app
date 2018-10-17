import { createStore, combineReducers, applyMiddleware } from 'redux';
import ExpensesReducer from '../reducers/expenses.js';
import FiltersReducer from '../reducers/filters.js';
import thunk from 'redux-thunk';


const store = () => (
    createStore(combineReducers({
        expenses: ExpensesReducer,
        filters: FiltersReducer
    }), applyMiddleware(thunk))
);
export default store;
