import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (props) => {
    const { children } = props;
    const jwt = localStorage.getItem('access_token');

    if (jwt) {
        return <>{children}</>
    }
    return <><Navigate to='/login' /></>
}

export default WithAuth;