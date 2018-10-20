import React from 'react';
import { connect } from 'react-redux';
import { startLoginUser } from '../actions/auth';

export const LoginPage = ({ loginUser }) => {
    
    const onLoginClick = () => {
        loginUser();
    }
    
    return(
        <div className='box-layout'>
            <div className='box-layout__box'>
                <h1>Expensify</h1>
                <p>Take better control of your finances</p>
                <button className='login-btn' onClick={onLoginClick}><img className='googleimg' src="/images/google-icon.png" alt="Submit"/></button>
            </div>
            
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    loginUser : () => dispatch(startLoginUser())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);