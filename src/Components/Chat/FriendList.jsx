import React from "react";
import avatar from "../../Images/avatar.png";
import search from "../../Images/search-icon.png";

const FriendList = () => {
    return (
        <div className="friendListContainer">
            <div className="search-wrapper">
                <img className="search-icon-wrapper" src={search} alt="" />
                {/* <img className="search-icon-wrapper" src="https://www.pngkey.com/png/detail/166-1668336_open-search-bar-white-search-bar-icon.png" alt="Open Search Bar - White Search Bar Icon@pngkey.com" /> */}
                <input className="searchPanel" placeholder="Search..." />
                {/* <div className="icon-wrapper"></div> */}
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