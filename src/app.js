import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './routes/RouterApp';
import reduxStore from './store/store';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';
import { history } from './routes/RouterApp';
import database from './firebase/firebase';
import { startSetExpenses } from './actions/expenses'; 
import { firebase } from './firebase/firebase';
import { loginUser, logoutUser } from './actions/auth'

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
        if(history.location.pathname === '/'){
            history.push('/dashboard')
        }
        console.log('logged in')
        store.dispatch(loginUser(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            render();
        });
      } else {
        history.push('/');
        store.dispatch(logoutUser());
        console.log('logged out')
        render();
      }
});
