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
  const [search, setSearch] = useState("");
  const [filter,setFilter] = useState("all");
  const [sort,setSort] = useState("old");

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

  function changeUser(user) {
    setCurrentUser(user);
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
    });
    const newComments = allComments.filter((comment) => comment.id !== id);
    console.log("hello")
    setAllComments(newComments);
  }

  function setCurrentSearch(searchTerm) {
    console.log(searchTerm);
    setSearch(searchTerm.toLowerCase());
  }

  function handlePostVote(count,id){
  fetch(`http://localhost:3000/posts/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      postVotes: count,
    })
  })
}

  
  const shownPosts = allPosts.filter((post) => {
    if(filter!=="all"){
    return (post.topic === filter && (
      post.title.toLowerCase().includes(search) ||
      post.desc.toLowerCase().includes(search))
    );
    }else{
      return ( 
      post.title.toLowerCase().includes(search) ||
      post.desc.toLowerCase().includes(search)
    );}
  });
  console.log(shownPosts);
if(sort === "new"){
  shownPosts.sort((a,b) => b.id - a.id);
}else if(sort === "old"){
  shownPosts.sort((a,b) => a.id - b.id);
}else if(sort === "hot"){
  shownPosts.sort((a,b) => b.postVotes - a.postVotes);
}


  return (
    <div className="App">
      <Navbar
        onChangePage={setPage}
        allUsers={allUsers}
        changeUser={changeUser}
        currentUser={currentUser}
        setCurrentSearch={setCurrentSearch}
      />

      <Routes>
        <Route
          path="/feed"
          element={
            <Feed
            setSort={setSort}
              allPosts={allPosts}
              posts={shownPosts}
              handleNewComment={handleNewComment}
              user={currentUser}
              users={allUsers}
              setFilter={setFilter}
              handlePostVote={handlePostVote}
              deleteComment={deleteComment}
            />
          }
        />
        <Route
          path="/new-post"
          element={
            <Newpost handlePost={handlePost} currentUser={currentUser} />
          }
        />
        <Route
          path="/account"
          element={<Account currentUser={currentUser} />}
        />

        <Route
          path="/"
          element={
            <Allpost
            deleteComment={deleteComment}
            setSort={setSort}
              allPosts={allPosts}
              posts={shownPosts}
              handleNewComment={handleNewComment}
              users={allUsers}
              handlePostVote={handlePostVote}
              setFilter={setFilter}
            />
          }
        />

        <Route path="/search" element={<Search />} />

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by ME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
