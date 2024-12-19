import React from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';

const PostPage = ({posts, setPosts}) => {
  const {id} = useParams();
  const post = posts.find((post) => post.id == id);
  const Navigate = useNavigate();

  function handleDelete(id) {
    const postList = posts.filter(post => post.id !== id);
    setPosts(postList);
    Navigate('/');
  }

  return (
    <main>
        <article>
          {post &&
            <>
              <h1>{post.title}</h1>
              <p>{post.date}</p>
              <p>{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </>
          }
          {!post && 
            <>
              <h1>there isnt a post here</h1>
              <p>why you trying to make trobble dont just change my url</p>
              <h1>bitch</h1>
              <Link to='/'>to back to the home page</Link>
            </>
          }
        </article>
    </main>
  )
}

export default PostPage