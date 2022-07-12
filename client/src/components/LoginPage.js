import { useState } from 'react';

function LoginPage({onLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                res.json().then((user) => onLogin(user))
            }
        })
    }

    return (
        <div id="Login buttons">
            <h4>Here's the login page</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" onChange={((e) => setUsername(e.target.value))}></input>
                <br></br>
                <input placeholder="password" type="password" onChange={((e) => setPassword(e.target.value))}></input>
            </form>
            <button id="sign-in-btn" className="main-account-btn">Sign in</button>
            <button id="create-account-btn" className="main-account-btn">Create Account</button>
        </div>
    )
}

export default LoginPage;