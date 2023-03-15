import React, { useState } from "react";

import send from "../../../Images/send-icon.png";

const ChatInput = ({ sendMessage }) => {
    const [message, setMessage] = useState("")

    const SendMessage = (e) => {
        e.preventDefault();

        if (message !== "") {
            sendMessage(message);
        }

    }

    return (
        <form className="chatInput" onSubmit={SendMessage}>
            <input className="inputMessage" placeholder="Message..." onChange={(e) => setMessage(e.target.value)} />
            <button className="inputButton">
                <img className="inputButtonImg" src={send} alt="" />
            </button>
        </form>
    );
};

export default ChatInput;