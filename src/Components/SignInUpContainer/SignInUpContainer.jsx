import React, { useRef, useState } from "react";
import './SignInUpContainer.css'
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


function SignInUpContainer() {
    const [login, setLogin] = useState(true);

    const signInUpContainerRef = useRef(null);

    const handleClick = () => {
        setLogin(!login);

        signInUpContainerRef.current.classList.toggle("active");
        console.log(signInUpContainerRef)
    }



    return (
        <div className="signInUpContainer" ref={signInUpContainerRef}>
            <SignIn />
            <div className="side-div">
                <button type="button" onClick={handleClick}>{login ? "Sign Up" : "Sign In"}</button>
            </div>
            <SignUp />
        </div>
    );
};

export default SignInUpContainer;