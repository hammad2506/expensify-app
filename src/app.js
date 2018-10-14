import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './routes/RouterApp';
import reduxStore from './store/store.js';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';

const store = reduxStore();

const APP = (
    <Provider store={store}>
        <RouterApp />
    </Provider>
);
ReactDOM.render(APP, document.getElementById('root'));

