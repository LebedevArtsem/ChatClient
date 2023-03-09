import React from "react";
import jwt from "jwt-decode";
import Message from "./Message";

const ChatWindow = (props) => {
    const user = jwt(localStorage.getItem('access_token'))
    const chat = props.chat.map(
        m => <Message key={Date.now() * Math.random()} user={user.name} message={m} />
    )
    return (
        <div>
            {chat}
        </div>
    );
}

export default ChatWindow;