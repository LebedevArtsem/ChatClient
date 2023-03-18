import React, { useState, useEffect, useRef, useCallback, createContext } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import "./ChatContainer.css";
import FriendList from "../FriendListContainer/FriendList";
import UserChat from "../UserChat/UserChat";
import background from "../../../Images/background.jpg";
import jwtInterceptor from "../../../setAuthToken"

export const UserContext = createContext();

const ChatContainer = () => {
    const [connection, setConnection] = useState(null);
    const [chat, setChat] = useState([]);
    const latestChat = useRef(null);
    const [friends, setFriends] = useState([])

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


    const initFriendList = useCallback(async () => {
        let temp = await jwtInterceptor.get('https://localhost:5001/api/chat/friends');
        setFriends(temp.data);
    }, [setFriends]);

    useEffect(() => {
        initFriendList();
    }, [initFriendList]);


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
            <UserContext.Provider value={friends}>

                <FriendList />

                <UserChat />

            </UserContext.Provider>
        </div>
    );
};

export default ChatContainer;

