import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Allpost from "./Components/Allpost";
import Feed from "./Components/Feed";
import Newpost from "./Components/Newpost";
import Search from "./Components/Search";
import Account from "./Components/Account";

function App() {
  const [page, setPage] = useState("/");
  const [allPosts, setAllPosts] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  /*current idea,
  pass down setcurrentuser to the drop down for selction
  add drop down options like a post-> map through list of users adding their names to array of options*/

  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((r) => r.json())
      .then((posts) => {
        setAllPosts(posts);
      });
    fetch("http://localhost:3000/users/")
      .then((r) => r.json())
      .then((users) => {
        setAllUsers(users);
        setCurrentUser(users[0]);
      });
  }, [allComments]);

  function changeUser(user){
    setCurrentUser(user)
  }

  //POST functions
  function handlePost(postObj) {
    fetch("http://localhost:3000/posts/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(postObj),
    })
      .then((r) => r.json())
      .then((newPost) => {
        console.log(newPost);
        const newPostComment = newPost;
        newPostComment.comments = [];
        console.log(newPostComment);
        const newPosts = [...allPosts, newPostComment];
        setAllPosts(newPosts);
        console.log(allPosts);
      });
  }

  function handleNewComment(postId, comment) {
    fetch("http://localhost:3000/comments", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        content: comment,
        postId: postId,
        commentVotes: 0,
        user: currentUser.name,
      }),
    })
      .then((r) => r.json())
      .then((comment) => {
        const newComments = [...allComments, comment];
        setAllComments(newComments);
        setAllPosts(allPosts);
      });
  }
  //DELETE functions
  function deleteComment(id) {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    })
    const newComments = allComments.filter(comment => comment.id !== id)
    setAllComments(newComments)
  }

  return (
    <div className="App">
      <h1>currentUser: {currentUser.name}</h1>
      <Navbar
        onChangePage={setPage}
        allUsers={allUsers}
        changeUser={changeUser}
        currentUser={currentUser}
      />

      <Routes>
        <Route
          path="/feed"
          element={
            <Feed
              posts={allPosts}
              handleNewComment={handleNewComment}
              user={currentUser}
            />
          }
        />
        <Route path="/new-post" element={<Newpost handlePost={handlePost} />} />
        <Route path="/account" element={<Account currentUser={currentUser} />} />

        <Route
          path="/"
          element={
            <Allpost posts={allPosts} handleNewComment={handleNewComment} />
          }
        />

        <Route path="/search" element={<Search />} />

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
