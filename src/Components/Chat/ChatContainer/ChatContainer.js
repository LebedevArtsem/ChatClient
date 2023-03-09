import React, { useState, useEffect, useRef, useCallback } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import "./ChatContainer.css";
import FriendList from "../FriendList";
import UserChat from "../UserChat";
import background from "../../../Images/background.jpg";

const ChatContainer = () => {
    const [connection, setConnection] = useState(null);
    const [chat, setChat] = useState([]);
    const latestChat = useRef(null);


    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:5001/hubs/chat",
                {
                    //transport: HttpTransportType.WebSockets,
                    accessTokenFactory: () => localStorage.getItem("access_token")
                })
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    const initConnection = useCallback(async () => {

        if (connection) {
            try {
                await connection.start();
                console.log("Connected");

                connection.on("sendtochat", message => {
                    console.log(message)
                    const updatedChat = [...latestChat.current];
                    updatedChat.push(message);

                    setChat(updatedChat);
                });
            }
            catch (e) {
                console.log("Connection failed", e)
            }

        }
    }, [connection, setChat]);

    useEffect(() => {
        initConnection();
    }, [initConnection]);

    const sendMessage = async (message, connectionId) => {

        try {
            let myconnectionId = await connection.invoke('getconnectionid');
            console.log(myconnectionId)
            //const data = { message: chatMessage.message, connectionId: connectionId };
            //await jwtInterceptor.post('https://localhost:5001/api/chat/messages', chatMessage);
            //await connection.invoke('sendmes', chatMessage);
            await connection.invoke('sendtochat', { connectionId, message });


        }
        catch (e) {
            console.log('Sending message failed', e);
        }
    }

    return (
        <div className="chatContainer" style={{ backgroundImage: `url(${background})` }}>
            {/* <ChatInput sendMessage={sendMessage} />
            <br />
            <ChatWindow chat={chat} /> */}

            <FriendList />
            <UserChat />
        </div>
    );
};

export default ChatContainer;
