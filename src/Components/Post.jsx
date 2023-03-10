import Comments from "./Comments.jsx";
import NewComment from "./NewComment.jsx";
import React, { useState } from "react";

export default function Post({ users, post, handleNewComment, handlePostVote,deleteComment}) {
  console.log(users);
  if(users.length===0){return<div>loading</div>}
  const [count, setCount] = useState(post.postVotes);
  function handleCLickUp() {
    const newCount = count + 1;
    setCount(() => newCount);
    handlePostVote(newCount,post.id);
  }
  function handleCLickDown() {
    const newCount = count - 1;
    setCount(() => newCount);
    handlePostVote(newCount,post.id);
  }
  const postUser = users.filter(user => user.id === post.user)
  
  console.log("user: "+JSON.stringify(postUser))
  return (
    <div className="indicator">
        <span className="indicator-item badge badge-primary">{post.topic}</span>
        
     
    <div className=" card min-w-90 max-w-xl bg-base-100 shadow-xl space-y-50">
      
      <figure>
        <img src={post.image} alt={post.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="avatar">
            <div className="w-12 rounded-full flex flex-col items-center justify-center ">
              <img
                src={postUser[0].propic}
                className="min-w-full max-w-fit overflow-hidden"
              />
            </div>
          </div>
          {post.title}
          <div className="justify-end">
            <h5>
              <button className="btn btn-outline btn-success"onClick={()=>handleCLickUp()}>
                <img src="./src/assets/up.png" className="w-4" />
              </button>
              {count}
              <button className="btn btn-outline btn-error" onClick={()=>handleCLickDown()}>
                <img src="./src/assets/down.png" className="w-4" />
              </button>
            </h5>
          </div>
        </h2>
        <p>{post.desc}</p>
        <div className="place-content-center">
          <NewComment
            className="bg-red"
            handleNewComment={handleNewComment}
            postId={post.id}
          />
          <div className="collapse collapse-arrow duration-75">
            <input type="checkbox" />
            <div className="collapse-title text-xl">Comments</div>
            <div className="collapse-content duration-75">
              <Comments post={post} deleteComment={deleteComment}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// flex justify-center block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700

// bg-slate-500 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50

//   <div className=" border-solid shadow-xs rounded-lg bg-slate-200 border-red-500 border-2 w-7/8 justify-center">
//     <h3 className="border-red-500 border-2 justify-center">
//       title: {post.title}
//     </h3>
//     <img
//       src={post.image}
//       alt={post.title}
//       className="rounded-lg w-7/10 place-self-center"
//     />
//     <p className="text-3xl font-bold underline">{post.desc}</p>
//     <p>{post.likes}</p>
// <div className="place-content-center">
//   <NewComment
//     className="bg-red"
//     handleNewComment={handleNewComment}
//     postId={post.id}
//   />
//   comments:
//   <div className="collapse duration-75">
//     <input type="checkbox" />
//     <div className="collapse-title text-xl font-medium">comments:</div>
//     <div className="collapse-content duration-75">
//       <Comments className="table" post={post} />
//     </div>
//   </div>
// </div>
//   </div>
