import { NavLink } from 'react-router-dom';

function Links({setUser}) {

    //Handles logout
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE"
        })
        .then(res => {
          if(res.ok){
            setUser(null)
          }
        })
      }
    /************************ */

    return (
        <div>
            <NavLink to="/" exact className="link-btn"><button>Home</button></NavLink>
            <NavLink to="/meal" exact className="link-btn"><button>Meals</button></NavLink>
            <button id="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Links