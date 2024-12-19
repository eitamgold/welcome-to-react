import React from "react";
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState(localStorage.getItem('posts') ? 
  JSON.parse(localStorage.getItem('posts')) : [{
    id: 1,
    title: 'they call him the what?',
    date: "00/00/00",
    body: "some body once told me"
  }, {
    id: 2,
    title: 'a bevrage of sorts??',
    date: "00/00/01",
    body: "the world is gonna roll me?"
  }, {
    id: 3,
    title: 'the call him the drink!??',
    date: "00/02/01",
    body: "i anit the smartest tool in the shed"
  }]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(()=> {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts])

  useEffect(() => {
    const filteredResults = posts.filter((post) => {
      return (((post.body).toLowerCase()).includes(search.toLowerCase()) || 
      ((post.title).toLowerCase()).includes(search.toLowerCase()))
    })
    setSearchResults(filteredResults);
  }, [posts, search])

  return (
    <div>
      <Header/>
      <Nav search={search} setSearch={setSearch}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home posts={searchResults}/>}/>
            
          <Route path="/post" element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              posts={posts}
              setPosts={setPosts}
            />}/>

          <Route path="/post/:id" element={<PostPage posts={posts} setPosts={setPosts}/>}/>

          <Route path="/about" element={<About/>}/>

          <Route path="*" element={<Missing/>}/>
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
