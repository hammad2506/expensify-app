import React from 'react';
import { connect } from 'react-redux';
import { startLoginUser } from '../actions/auth';

export const LoginPage = ({ loginUser }) => {
    
    const onLoginClick = () => {
        loginUser();
    }
    
    return(
        <div>
            <button onClick={onLoginClick}>Login</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    loginUser : () => dispatch(startLoginUser())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);