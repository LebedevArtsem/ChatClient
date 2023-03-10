import React from "react";

import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

import "./UserChat.css"

const UserChat = () => {
    return (
        <div className="userChat">
            <ChatBar />

            <div className="userChatContainer">

                <ChatBody />

                <ChatInput />
            </div>
        </div>
    );
};

export default UserChat;