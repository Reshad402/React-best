import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { body, title, id, userId } = post;
    return (
        <div>
            <h3>all about post details:{id}</h3>
            <h1>Title:{title}</h1>
            <p>{body}</p>
            <Link to={`/friend/${userId}`}><button>Get the author</button></Link>
        </div>
    );
};

export default PostDetails;