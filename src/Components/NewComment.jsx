import { useState } from "react";
export default function NewComment({postId, handleNewComment}) {
  const [commentText, setCommentText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(commentText);
    handleNewComment(postId, commentText)
    setCommentText("")
    
  }

  return (
    <div className="collapse collapse-arrow">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    New Comment
  </div>
  <div className="collapse-content"> 
  <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add Comment"
        className="input input-bordered input-primary w-full max-w-xs"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
    </form>
  </div>
</div>
   
  );
}
