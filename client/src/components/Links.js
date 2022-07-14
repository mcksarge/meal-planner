import { NavLink } from 'react-router-dom';

function Links() {


    return (
        <div>
            <NavLink to="/home" exact className="link-btn">Home</NavLink>
            <NavLink to="/meals" exact className="link-btn">Meals</NavLink>
            <NavLink to="/logout" exact className="link-btn">Logout</NavLink>
        </div>
    )
}

export default Links