import React, { useContext, useState } from "react";
import jwt from "jwt-decode";
import send from "../../../../Images/send-icon.png";
import { UserContext } from "../../ChatContainer/ChatContainer";

const ChatInput = ({ sendMessage }) => {
    const [message, setMessage] = useState("")
    const friend = useContext(UserContext).friend

    const user = jwt(localStorage.getItem('access_token'))

    const SendMessage = (e) => {
        e.preventDefault();

        if (message !== "") {
            sendMessage(message, user.email, friend.friendEmail);
        }

        setMessage("");
    }

    return (
        <form className="chatInput" onSubmit={SendMessage}>
            <input className="inputMessage" placeholder="Message..." value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="inputButton">
                <img className="inputButtonImg" src={send} alt="" />
            </button>
        </form>
    );
};

export default ChatInput;