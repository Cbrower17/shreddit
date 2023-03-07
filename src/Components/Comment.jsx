import React, {useState} from "react"
export default function Comment({comment,handleDelete}){
    const [count, setCount] = useState(comment.commentVotes)
   function handleCLickUp(){
    const newCount = count+1
setCount(()=>newCount)
   }
   function handleCLickDown(){
    const newCount = count-1
setCount(()=>newCount)
   }
    return (
    <div>
        <h3>{comment.user}:</h3>
        <p>{comment.content}</p>
        <p>{comment.id}</p>
        <button onClick={handleDelete(comment.id)}>remove</button>
        <button onClick={handleCLickUp}>⬆</button>
        <p>{count}</p>
        <button onClick={handleCLickDown}>⬇</button>
        </div>
    )
}