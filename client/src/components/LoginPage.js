import { useState } from 'react';

function LoginPage({onLogin}){
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [createAccount, setCreateAccount] = useState(false)

    function handleCreateAccount(e) {
        e.preventDefault()
        console.log(e)

        
    }


    function handleSubmit(e) {
        e.preventDefault();
        
        const user = {username, password}
        
        if(!createAccount) {
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
        } else {
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    name,
                    password
                })
            })
            .then((res) => {
                if (res.ok) {
                    res.json()
                    .then((user) => onLogin(user))
                } else {
                    res.json()
                    .then((error) => setErrors(error.errors));
                }
            })
        } 
    }

    function handleShowLogin() {
        if(!createAccount){
            setCreateAccount(true)
        }else{
            setCreateAccount(false)
        }
    }

    if(createAccount == false) {
        console.log("Login")
        return (
            <div className="login-page">
                <div className="login-form-div">
                    <form onSubmit={handleSubmit}>
                    <h1 id="login-page-title">The Meal Planner</h1>
                        <input className="login-page-input" placeholder="username" onChange={((e) => setUsername(e.target.value))}></input>
                        <br></br>
                        <input className="login-page-input" placeholder="password" type="password" onChange={((e) => setPassword(e.target.value))}></input>
                        <br></br>
                        <button id="sign-in-btn">Sign in</button>
                        <br></br>
                        <p>Don't have an account?</p>
                    </form>
                    <button onClick={handleShowLogin}>Create Account</button>
                </div>
            </div>
        )
    } else {
        console.log("Sign up")
        return (
            <div className='login-page'>
                <div className="login-form-div">
                    <h1 id="login-page-title">The Meal Planner</h1>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="username" onChange={((e) => setUsername(e.target.value))}></input>
                        <br></br>
                        <input placeholder="name" onChange={((e) => setName(e.target.value))}></input>
                        <br></br>
                        <input placeholder="password" type="password" onChange={((e) => setPassword(e.target.value))}></input>
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                    <p>Already have an account?</p>
                    <button onClick={handleShowLogin}>Sign In</button>
                </div>
            </div>
        )
    }
    
}

export default LoginPage;