import React, { useCallback, useEffect, useState } from "react";
import FriendItem from "./FriendItem";
import search from "../../../Images/search-icon.png";
import "./FriendList.css"
import jwtInterceptor from "../../../setAuthToken";

const FriendList = ({ friends, setFriendList }) => {

    const [valueSearch, setValueSearch] = useState('');

    const findFriends = useCallback(async () => {

        let temp = await jwtInterceptor.get(`https://localhost:5001/api/chat/find-friends?key=${valueSearch}`);
        setFriendList(temp.data);

    }, [valueSearch, setFriendList]);

    useEffect(() => {
        findFriends();
    }, [findFriends]);

    return (
        <div className="friendListContainer">
            <div className="searchWrapper">
                <img className="searchIconWrapper" src={search} alt="" />
                <input className="searchPanel" placeholder="Search..." value={valueSearch}
                    onChange={(e) => { setValueSearch(e.target.value) }} />
            </div>
            {
                friends ?
                    friends.map((user) => {
                        return <FriendItem key={user.friendEmail} user={user} lastMessage={"Hi"} />
                    })
                    :
                    <div className="noContacts">No contacts</div>
            }
        </div>
    );
};

export default FriendList;