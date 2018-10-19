import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogoutUser } from '../actions/auth';


export const Header = ( {logoutUser} ) => {
    
    const onLogoutClick = () => { 
        logoutUser()
     };
    
    return (
        <div>
            <button onClick={onLogoutClick}>Log out </button>
            <NavLink to='/' exact={true} activeClassName='activeLink'>Home</NavLink>
            <NavLink to='/add' activeClassName='activeLink'>Add</NavLink>
            <NavLink to='/help' activeClassName='activeLink'>Help</NavLink>
        </div>
     );
};

const mapDispatchToProps = (dispatch) => ({
    logoutUser : () => dispatch(startLogoutUser())
});

export default connect(undefined, mapDispatchToProps)(Header);