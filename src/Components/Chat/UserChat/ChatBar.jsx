import React, { useContext } from "react";

import videocall from "../../../Images/videocall.png";
import phonecall from "../../../Images/phonecall.png";

const ChatBar = ({ user, isOnline }) => {

    return (
        <div className="chatBar">
            <div className="profile">

                <div className="photo">
                    <img src="" alt=""></img>
                </div>
                <div className="userInformation">
                    <p>{user ? user.name : ""}</p>
                    {
                        isOnline ?
                            <p style={{ color: "#21FF5F" }}>Online</p> :
                            <p style={{ color: "#6e6e6e" }}>Offline</p>
                    }

                </div>
            </div>
            <div className="specialButtons">
                <button className="specialButton">
                    <img className="specialButtonImg" src={videocall} alt="" />
                </button>
                <button className="specialButton" style={{ marginRight: "20px" }}>
                    <img className="specialButtonImg" src={phonecall} alt="" />
                </button>
            </div>
        </div>
    );
};

export default ChatBar;