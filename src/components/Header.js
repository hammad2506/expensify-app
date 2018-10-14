import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <NavLink to='/' exact={true} activeClassName='activeLink'>Home</NavLink>
            <NavLink to='/add' activeClassName='activeLink'>Add</NavLink>
            <NavLink to='/help' activeClassName='activeLink'>Help</NavLink>
        </div>
     );
};

export default Header;