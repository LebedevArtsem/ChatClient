import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './SignIn.css';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();
    const RouteNavigate = () => {
        navigate('/Chat');
    }

    const SignInUser = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post('https://localhost:5001/api/auth/signin', {
                email: email,
                password: password
            });
            const jwt = res.data.value.accessToken;
            const refresh = res.data.value.refreshToken;

            localStorage.setItem('access_token', jwt);
            localStorage.setItem('refresh_token', refresh);

        }
        catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="signIn">

            <h1>Sign In</h1>
            <form className="form" >
                <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type='password'
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit" onClick={async (e) => {
                    await SignInUser(e);
                    RouteNavigate();
                }}>Continue</button>
            </form>
        </div>
    );
};

export default SignIn;