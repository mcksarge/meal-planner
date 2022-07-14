import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function LoginPage({onLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showLogin, setShowLogin] = useState(true)

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submit Complete")
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
            }
        })
    }

    return (
        <div id="Login buttons">
            <form onSubmit={handleSubmit}>
                <input placeholder="username" onChange={((e) => setUsername(e.target.value))}></input>
                <br></br>
                <input placeholder="password" type="password" onChange={((e) => setPassword(e.target.value))}></input>
                <br></br>
                <button id="sign-in-btn" className="main-account-btn">Sign in</button>
                <br></br>
            </form>
            <p>Don't have an account?</p>
            <NavLink to="/signuppage" exact>Create Account</NavLink>
        </div>
    )
}

export default LoginPage;