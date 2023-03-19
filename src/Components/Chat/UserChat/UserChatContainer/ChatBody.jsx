import React from "react";
import jwt from "jwt-decode";
import Message from "./Message";


const ChatBody = ({ chat }) => {

    const user = jwt(localStorage.getItem('access_token'));

    return (
        <div className="chatBody">
            {/* <p className="time">Today, 9.30 am</p> */}
            {chat.map(
                m => <Message key={Date.now() * Math.random()} message={m} user={user.email} />
            )}
        </div>
    );
}

export default ChatBody;