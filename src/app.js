import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './routes/RouterApp';
import reduxStore from './store/store.js';
import { Provider, connect } from 'react-redux';
import { addExpense } from './actions/expenses.js';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';


const store = reduxStore();

store.dispatch(addExpense({
    description: 'internet bill',
    amount: 350,
    createdAt: moment().format()
    })
);

store.dispatch(addExpense({
    description: 'rent',
    amount: 100,
    createdAt: moment().format()
    })
);

// store.dispatch(changeText('int'));


// const test = getVisibleExpenses(store.getState().expenses, store.getState().filters);

// console.log(test);

const jsx = (
    <Provider store={store}>
        <RouterApp />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

