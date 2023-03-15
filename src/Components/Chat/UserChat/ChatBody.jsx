import React, { useState } from "react";

const ChatBody = () => {

    const [myMessages, setMyMessages] = useState([]);
    const [userMessages, setUserMessages] = useState([]);

    return (
        <div className="chatBody">
            <p className="time">Today, 9.30 am</p>
            <div className="messageContainer myMessage">
                Hi,Ivan
            </div>
            <div className="messageContainer userMessage">
                Hi,Artem
            </div>
            <div className="messageContainer userMessage">
                Hi,Artem
            </div>
            <div className="messageContainer userMessage">
                Hi,Artemasdfasdfasfasfd
            </div>
            <div className="messageContainer userMessage">
                Hi,Artem
            </div>
            <div className="messageContainer userMessage">
                Hi,Artem
            </div>
            <div className="messageContainer userMessage">
                Hi,Artem
            </div><div className="messageContainer userMessage">
                Hi,Artem
            </div>
        </div>
    );
}

export default ChatBody;