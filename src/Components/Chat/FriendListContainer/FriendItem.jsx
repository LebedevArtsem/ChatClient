import React from "react";
import avatar from "../../../Images/avatar.png";

const FriendItem = ({ username, lastMessage }) => {
    return (
        <div className="friendItem">
            <div className="photo listPhoto">
                <img className="photo" src={avatar} alt="" />
            </div>
            <div className="userInformation">
                <p>{username}</p>
                <p>{lastMessage}</p>
            </div>
        </div>
    );
};

export default FriendItem;