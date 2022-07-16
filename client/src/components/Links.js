import { NavLink } from 'react-router-dom';

function Links() {


    return (
        <div>
            <NavLink to="/" exact className="link-btn">Home</NavLink>
            <NavLink to="/meals" exact className="link-btn">Meals</NavLink>
        </div>
    )
}

export default Links