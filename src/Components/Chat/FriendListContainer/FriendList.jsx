import React, { useContext } from "react";
import FriendItem from "./FriendItem";
import search from "../../../Images/search-icon.png";

import "./FriendList.css"
import { UserContext } from "../ChatContainer/ChatContainer";

const FriendList = () => {

    return (
        <UserContext.Consumer>
            {
                friends => (
                    <div className="friendListContainer">
                        <div className="searchWrapper">
                            <img className="searchIconWrapper" src={search} alt="" />
                            <input className="searchPanel" placeholder="Search..." />
                        </div>
                        {
                            friends.map((user) => {
                                return <FriendItem key={user.friendEmail} username={user.name} lastMessage={"Hi"} />
                            })
                        }
                    </div>
                )}
        </UserContext.Consumer>

    );
};

export default FriendList;