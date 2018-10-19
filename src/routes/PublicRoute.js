import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => (
    <Route {...rest} component={(props)=>(
        isLoggedIn ? (
            <Redirect to='/dashboard' />
        ) : (
            <div>
                <Component {...props} />
            </div>
        )
    )}/>
)

const mapStateToProps = (state) => ({ 
    isLoggedIn: !!state.auth.user 
})

export default connect(mapStateToProps)(PublicRoute);

