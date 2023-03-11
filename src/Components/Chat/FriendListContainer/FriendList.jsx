import React from "react";
import avatar from "../../../Images/avatar.png";
import search from "../../../Images/search-icon.png";

import "./FriendList.css"

const FriendList = () => {
    return (
        <div className="friendListContainer">
            <div className="search-wrapper">
                <img className="search-icon-wrapper" src={search} alt="" />
                <input className="searchPanel" placeholder="Search..." />
            </div>
            <div className="friendList">
                <div className="user">
                    <div className="photo listPhoto">
                        <img className="photo" src={avatar} alt="" />
                    </div>
                    <div className="userName">
                        <p className="text">Artem</p>
                        <p className="text">Hi</p>
                    </div>
                </div>
                <div className="user">
                    <div className="photo listPhoto">
                        <img className="photo" src={avatar} alt="" />
                    </div>
                    <div>
                        <div className="userName">
                            <p className="text">Andrei</p>
                            <p className="text">Hi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendList;