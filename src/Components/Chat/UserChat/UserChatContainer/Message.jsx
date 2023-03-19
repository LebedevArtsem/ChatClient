import React from "react";

const Message = ({ user, message }) => {

    return (
        <div className={`${user === message.sendedUser ? "messageContainer  myMessage" : "messageContainer  userMessage"}`}>
            {message.message}
        </div>
    );
};

export default Message;