import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import ExpensifyAdd from '../components/ExpensifyAdd';
import ExpensifyEdit from '../components/ExpensifyEdit';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'; 

const history = createHistory()


const RouterApp = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' exact={true} component={LoginPage}/>
                <PrivateRoute path='/dashboard' component={ExpensifyDashboard}/>
                <PrivateRoute path='/add' component={ExpensifyAdd}/>
                <PrivateRoute path='/edit/:id' component={ExpensifyEdit}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export  { RouterApp as default, history };
