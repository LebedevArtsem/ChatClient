import { React, useState } from "react";
import "./SignUp.css"

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const SignUpUser = async () => {
        const signUpUser = {
            email: email,
            name: name,
            password: password,
            confirmPassword: confirmPassword
        };

        try {
            const data = await fetch("https://localhost:5001/api/auth/signUp", {
                method: 'POST',
                body: JSON.stringify(signUpUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
            //.then(e => setError(e.value))
            console.log(data)
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="signUp">
            <h1>Sign Up</h1>
            <form className="form" >
                <input placeholder="Name" onChange={(event) => setName(event.target.value)} />
                <input placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                <input type='password' placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                <input type='password' placeholder="Confirm password" onChange={(event) => setConfirmPassword(event.target.value)} />
                <button type="button" onClick={SignUpUser}>Continue</button>
            </form>
        </div>
    )
};


export default SignUp;