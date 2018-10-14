import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h3>404 Page NOT FOUND</h3>
        <Link to='/'> Home Page </Link>
    </div>
);

export default PageNotFound;