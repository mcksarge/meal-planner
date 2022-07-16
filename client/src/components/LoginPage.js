import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function LoginPage({onLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showLogin, setShowLogin] = useState(true)
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        
        const user = {username, password}
        
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then((user) => onLogin(user))
            } else {
                res.json()
                .then((err) => setErrors(err.errors))
            };
        })
    }

    return (
        <div id="login-page">
            <div id="login-form-div">
                <form onSubmit={handleSubmit}>
                <h1 id="login-page-title">The Meal Planner</h1>
                    <input className="login-page-input" placeholder="username" onChange={((e) => setUsername(e.target.value))}></input>
                    <br></br>
                    <input className="login-page-input" placeholder="password" type="password" onChange={((e) => setPassword(e.target.value))}></input>
                    <br></br>
                    <button id="sign-in-btn">Sign in</button>
                    <br></br>
                    <p>Don't have an account?</p>
                <NavLink to="/signuppage" exact>Create Account</NavLink>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;