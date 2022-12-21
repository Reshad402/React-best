import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendMain from './FriendMain';

const Friend = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h3>This is friend part :${friends.length}</h3>
            {
                friends.map(friend => <FriendMain
                    key={friend.id}
                    friend={friend}
                ></FriendMain>)
            }
        </div>
    );
};

export default Friend;