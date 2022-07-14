import { useState } from "react";

function SignUpPage({onLogin}) {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

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
                <input placeholder="username"></input>
                <br></br>
                <input placeholder="name"></input>
                <br></br>
                <input placeholder="password"></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default SignUpPage