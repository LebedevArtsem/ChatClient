import { HubConnectionBuilder } from "@microsoft/signalr";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import jwtInterceptor from "../../../../setAuthToken";
import { UserContext } from "../../ChatContainer/ChatContainer";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

const UserChatContainer = () => {

    const [connection, setConnection] = useState(null);
    const [chat, setChat] = useState([]);
    const latestChat = useRef(null);

    const friend = useContext(UserContext).friend;

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

    const initChatHistory = useCallback(async () => {
        let history = await jwtInterceptor.get(`https://localhost:5001/api/chat/message-history?friendEmail=${friend.friendEmail}`);
        setChat(history.data);
    }, [setChat, friend]);

    useEffect(() => {
        initChatHistory();
    }, [initChatHistory]);

    useEffect(() => {
        initConnection();
    }, [initConnection]);

    const sendMessage = async (message, sendedUser, recievedUser) => {
        const chatMessage = {
            sendedUser: sendedUser,
            recievedUser: recievedUser,
            message: message
        };

        try {
            await connection.invoke('sendtochat', chatMessage);

            const updatedChat = [...latestChat.current];
            updatedChat.push(chatMessage);

            setChat(updatedChat);

        }
        catch (e) {
            console.log('Sending message failed', e);
        }
    }

    return (
        <div className="userChatContainer">

            {/* <ChatBody chat={chat} /> */}

            {/* <ChatInput sendMessage={sendMessage} /> */}

        </div>
    );
}

export default UserChatContainer;