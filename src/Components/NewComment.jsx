import { useState } from "react";
export default function NewComment({postId, handleNewComment}) {
  const [commentText, setCommentText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(commentText);
    handleNewComment(postId, commentText)
    
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      add comment
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
    </form>
  );
}
