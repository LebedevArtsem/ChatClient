import { React, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import jwt from "jwt-decode";

import "./NavigationBar.css"

const NavigationBar = () => {
    const [token] = useState(localStorage.getItem('access_token'))
    const GetUser = () => {

        try {
            const jwtToken = localStorage.getItem('access_token');

            return jwt(jwtToken).name;
        }
        catch (e) {
            console.log(e);
        }
    }

    const SignOut = () => {
        //setToken(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

    let navigate = useNavigate();
    const RouteNavigate = () => {
        navigate('/login');
    }

    return (
        <>
            <nav>
                <Link href="/chat">Chat</Link>
                <div>
                    <div>
                        {GetUser() ? <p>{GetUser()}</p> : <p>Guest</p>}
                    </div>
                    {token && <button type="button" onClick={() => { SignOut(); RouteNavigate() }}>SignOut</button>}
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default NavigationBar;