import React, { createContext } from "react";
import FriendItem from "./FriendItem";
import search from "../../../Images/search-icon.png";

import "./FriendList.css"
import { UserContext } from "../ChatContainer/ChatContainer";

const FriendList = () => {
    return (
        <UserContext.Consumer>
            {
                theme => (
                    <div className="friendListContainer">
                        <div className="search-wrapper">
                            <img className="search-icon-wrapper" src={search} alt="" />
                            <input className="searchPanel" placeholder="Search..." />
                        </div>
                        <FriendItem username={"Andrei Lebedev"} lastMessage={"Hi"} />
                        <FriendItem username={"Lionel Messi"} lastMessage={"Hi"} />
                    </div>
                )}
        </UserContext.Consumer>

    );
};

export default FriendList;