import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetails from '../PostDeetails/PostDetails';
import Post from './Post';


const Posts = () => {
    const posts = useLoaderData();
    const { title, body } = posts;
    return (
        <div>
            <h3>hi</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            {
                posts.map(post => <Post
                    key={posts.id}
                    post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;