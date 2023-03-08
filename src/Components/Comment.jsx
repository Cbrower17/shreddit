import React, { useState } from "react";
export default function Comment({ comment }) {
  const [count, setCount] = useState(comment.commentVotes);
  function handleCLickUp() {
    const newCount = count + 1;
    setCount(() => newCount);
  }
  function handleCLickDown() {
    const newCount = count - 1;
    setCount(() => newCount);
  }
  function handleRemove(){
    console.log('dont look')
  }
  return (
    <div className="table-row bg-slate-400 border-2 border-slate-500 w-11/12">
        <h3 className="">{comment.user}:</h3>
        <p className="">{comment.content}</p>
        <p className="">{comment.id}</p>
        <button className="btn sm w-15 rounded-full" onClick={()=>handleRemove()}>
          remove
        </button>
        <div className=" inline-grid w-9">
            <button className="inline-grid" onClick={()=>handleCLickUp()}>⬆</button>
            <p className="inline-grid">{count}</p>
            <button className="inline-grid" onClick={()=>handleCLickDown()}>⬇</button>
        </div>
    </div>
  );
}
