import { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUpPage({onLogin}) {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)

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

    return (
        <div>
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
            <NavLink to="/" exact>Sign In</NavLink>
        </div>
    )

}

export default SignUpPage