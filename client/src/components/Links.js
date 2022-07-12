import { NavLink } from 'react-router-dom';
import React from 'react';

function Links() {


    return (
        <div>
            <NavLink to="/" exact className="link-btn">Home</NavLink>
            <NavLink to="/meals" exact className="link-btn">Meals</NavLink>
            <NavLink to="/login" exact className="link-btn">Login</NavLink>
        </div>
    )
}

export default Links