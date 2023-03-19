import React, { useContext } from "react";
import { UserContext } from "../ChatContainer/ChatContainer";
import ChatBar from "./ChatBar";
import UserChatContainer from "./UserChatContainer/UserChatContainer";

import "./UserChat.css";

const UserChat = () => {

    const userFriend = useContext(UserContext);

    return (
        <div className={`userChat ${userFriend.friend && "userDefine"}`}>
            {userFriend.friend ?
                <>
                    <ChatBar user={userFriend.friend} isOnline={true} />

                    <UserChatContainer />
                </>
                :
                <div className="undefinedUser">
                    <p className="undefinedUserText">Select a chat to start messaging</p>
                </div>}
        </div>
    );
};

export default UserChat;