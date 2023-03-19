import React, { useContext, useState } from "react";
import { UserContext } from "../ChatContainer/ChatContainer";
import avatar from "../../../Images/avatar.png";

const FriendItem = ({ user, lastMessage }) => {

    const [active, setActive] = useState(false);

    const { setFriend } = useContext(UserContext);

    const ChooseUser = () => {
        setFriend(user);
    }

    return (
        <div className={`friendItem ${active && 'active'}`} onClick={ChooseUser}>
            <div className="photo listPhoto">
                <img className="photo" src={avatar} alt="" />
            </div>
            <div className="userInformation">
                <p>{user.name}</p>
                <p>{lastMessage}</p>
            </div>
        </div >
    );
};

export default FriendItem;