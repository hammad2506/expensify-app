import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({ isLoggedIn ,component: Component, ...rest }) => (
    <Route {...rest} component={(props)=>(
        isLoggedIn ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
            
        ) : (
            <Redirect to='/' />
        )
    )}/>
)

const mapStateToProps = (state) => ({ 
    isLoggedIn: !!state.auth.user 
})

export default connect(mapStateToProps)(PrivateRoute);

