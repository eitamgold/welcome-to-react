import React from 'react'
import PostBlock from './PostBlock'

const Home = ({posts}) => {
  return (
    <main>
        {posts.length ? 
          posts.map((post) => {
            return (<PostBlock key={post.id} post={post}/>)
          }) : (
          <p>No posts to display</p>
        )}
    </main>
  )
}

export default Home