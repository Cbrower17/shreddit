import { useState,useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Allpost from './Components/Allpost';
import Feed from './Components/Feed';
import Newpost from './Components/Newpost';
import Search from './Components/Search';

function App() {
  const [page, setPage] = useState("/")
  const [allPosts, setAllPosts] = useState([])
  const [allComments, setAllComments] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/posts/")
    .then(r => r.json())
    .then(posts => {
      setAllPosts(posts)
      
    })
  },[allComments])

console.log(allPosts)
function handlePost(postObj){
  fetch("http://localhost:3000/posts/", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(postObj)
  })
  .then(r => r.json())
  .then(newPost => {
    console.log(newPost)
    const newPostComment = newPost
    newPostComment.comments=[]
    console.log(newPostComment)
    const newPosts = [...allPosts,newPostComment]
    setAllPosts(newPosts)
    console.log(allPosts)
  })
}

function handleNewComment(postId, comment){
  fetch("http://localhost:3000/comments", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      content: comment,
      postId: postId,
      commentVotes: 0,
      user:"mario"
    })
  })
  .then(r => r.json())
  .then(comment => {
    const newComments = [...allComments,comment]
    setAllComments(newComments)
    setAllPosts(allPosts)
  })
}

  return (
    <div className="App">
     <Navbar onChangePage={setPage}/>
     
     <Routes>
                <Route path="/feed" element={<Feed posts= {allPosts} handleNewComment={handleNewComment}/>} />
                <Route path="/new-post" element={<Newpost handlePost={handlePost}/>}/>
                    
                
                <Route path="/" element={<Allpost posts= {allPosts} handleNewComment={handleNewComment} />}/>

                <Route path="/search" element={<Search/>}/>
                    
                
                <Route path="*"element={<h1>404 not found</h1>}/>
                    
            </Routes>
            
    </div>
  )
}

export default App
