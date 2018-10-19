import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import ExpensifyAdd from '../components/ExpensifyAdd';
import ExpensifyEdit from '../components/ExpensifyEdit';
import ExpensifyHelp from '../components/ExpensifyHelp';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';

const RouterApp = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' exact={true} component={LoginPage}/>
                <Route path='/dashboard' component={ExpensifyDashboard}/>
                <Route path='/add' component={ExpensifyAdd}/>
                <Route path='/edit/:id' component={ExpensifyEdit}/>
                <Route path='/help' component={ExpensifyHelp}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default RouterApp;
