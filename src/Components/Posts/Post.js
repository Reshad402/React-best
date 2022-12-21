import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className='post'>
            <h2>The title : {title}</h2>
            <p>The body:{body}</p>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default Post;