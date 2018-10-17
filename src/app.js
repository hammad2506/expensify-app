import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './routes/RouterApp';
import reduxStore from './store/store';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';
import database from './firebase/firebase';
import { startSetExpenses } from './actions/expenses'; 

const store = reduxStore();

const APP = (
    <Provider store={store}>
        <RouterApp />
    </Provider>
);

ReactDOM.render(<p>Loading....</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(APP, document.getElementById('root'));
});
