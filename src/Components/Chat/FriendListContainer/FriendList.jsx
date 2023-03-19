import React from "react";
import FriendItem from "./FriendItem";
import search from "../../../Images/search-icon.png";

import "./FriendList.css"

const FriendList = ({ friends }) => {

    return (
        <div className="friendListContainer">
            <div className="searchWrapper">
                <img className="searchIconWrapper" src={search} alt="" />
                <input className="searchPanel" placeholder="Search..." />
            </div>
            {
                friends.map((user) => {
                    return <FriendItem key={user.friendEmail} user={user} lastMessage={"Hi"} />
                })
            }
        </div>
    );
};

export default FriendList;