import React from 'react';
import { Link } from 'react-router-dom';

const PostBlock = ({post}) => {
  return (
    <div className='post-block'>
        <Link to={`/post/${post.id}`} className='Link'>
            <p className='post-title'>{post.title}</p>
            <p className='post-date'>{post.date}</p>
        </Link>
        <p className='post-body'>{(post.body).length <= 25 ? post.body : `${post.body.slice(0,24)}...`}</p>
    </div>
  )
}

export default PostBlock