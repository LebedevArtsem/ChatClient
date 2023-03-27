import React, { useState, createContext, useMemo } from "react";
import "./ChatContainer.css";
import FriendList from "../FriendListContainer/FriendList";
import UserChat from "../UserChat/UserChat";
import background from "../../../Images/background.jpg";

export const UserContext = createContext({
    friend: {},
    setFriend: () => { }
});

const ChatContainer = () => {
    const [friendList, setFriendList] = useState([]);

    const [friend, setFriend] = useState();
    const value = useMemo(
        () => ({ friend, setFriend }), [friend]);

    // const initFriendList = useCallback(async () => {
    //     let temp = await jwtInterceptor.get('https://localhost:5001/api/chat/friends');
    //     setFriendList(temp.data);
    // }, [setFriendList]);

    // useEffect(() => {
    //     initFriendList()
    // }, [initFriendList]);

    return (
        <div className="chatContainer" style={{ backgroundImage: `url(${background})` }}>
            <UserContext.Provider value={value}>
                <FriendList friends={friendList} setFriendList={setFriendList} />

                <UserChat />

            </UserContext.Provider>
        </div>
    );
};

export default ChatContainer;

