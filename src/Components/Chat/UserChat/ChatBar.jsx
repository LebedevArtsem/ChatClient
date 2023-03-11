import React from "react";

import videocall from "../../../Images/videocall.png";
import phonecall from "../../../Images/phonecall.png";

const ChatBar = () => {
    return (
        <div className="chatBar">
            <div className="profile">

                <div className="photo">
                    <img src="" alt=""></img>
                </div>
                <div className="userName">
                    <p>Artem Lebedev</p>
                    <p style={{ color: "#21FF5F" }}>Online</p>
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