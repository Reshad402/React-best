import React from 'react';
import { Link } from 'react-router-dom';
import './FriendMain.css'
const FriendMain = ({ friend }) => {
    const { name, email, id, username } = friend;
    return (
        <div className='divide'>
            Name:{name}; <br />
            Email:{email};
            {/* <p><small>Username:<Link to={`/friend/${id}`}>{username}</Link></small></p>
             */}
            <p><small>Username:<Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div >
    );
};

export default FriendMain;