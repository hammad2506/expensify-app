import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogoutUser } from '../actions/auth';


export const Header = ( {logoutUser} ) => {
    
    const onLogoutClick = () => { 
        logoutUser()
     };
    
    return (
        <header className='header'>
            <div className='content-container'>
                    <div className='header__content'>
                        <Link className='header__title' to='/dashboard'>
                            <h1>Expensify</h1>
                        </Link>
                        <button className='button button--link' onClick={onLogoutClick}>Log out</button>
                    </div>
            </div>
        </header>
        
     );
};

const mapDispatchToProps = (dispatch) => ({
    logoutUser : () => dispatch(startLogoutUser())
});

export default connect(undefined, mapDispatchToProps)(Header);