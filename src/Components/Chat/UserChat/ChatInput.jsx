import React from "react";

import send from "../../../Images/send-icon.png";

const ChatInput = () => {
    return (
        <form className="chatInput">
            <input className="inputMessage" placeholder="Message..." />
            <button className="inputButton">
                <img className="inputButtonImg" src={send} alt="" />
            </button>
        </form>
    );
};

export default ChatInput;