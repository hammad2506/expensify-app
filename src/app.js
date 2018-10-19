import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './routes/RouterApp';
import reduxStore from './store/store';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';
import database from './firebase/firebase';
import { startSetExpenses } from './actions/expenses'; 
import { firebase } from './firebase/firebase';

const store = reduxStore();

let isRendered = false;
const render = () => {
    if(!isRendered){
        ReactDOM.render(APP, document.getElementById('root'));
        isRendered = true;
    }
}

const APP = (
    <Provider store={store}>
        <RouterApp />
    </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in')
        store.dispatch(startSetExpenses()).then(()=>{
            render();
        });
      } else {
          console.log('logged out')
          render();
      }
});
