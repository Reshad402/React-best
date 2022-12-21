import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    return (
        <div>
            <h3>All you need to know :{friend.name}</h3>
            <h5>Mobile:{friend.phone}</h5>
            <h5>Email:{friend.email}</h5>
        </div>
    );
};

export default FriendDetails;