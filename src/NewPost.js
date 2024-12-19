import React from 'react'
import {useNavigate} from 'react-router-dom';

const NewPost = ({
  postTitle, setPostTitle, postBody, setPostBody, setPosts, posts
}) => {
  const Navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    const postList = [...posts, {
      id: posts.length ? posts[posts.length-1].id + 1 : 1,
      title: postTitle,
      body: postBody,
      date: "06/06/06"
    }]
    console.log(postList);
    setPosts(postList);
    Navigate(-1);
  }

  return (
    <main>
        <h1>New Post</h1>
        <form noValidate className='postForm' onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input
            className='postTitle'
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor='postBody'>Post:</label>
          <textarea
            className='postBody'
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <button>Submit</button>
        </form>
    </main>
  )
}

export default NewPost