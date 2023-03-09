import { useState } from "react";
export default function FilterBox({allPosts, setFilter}) {
    let categorholders = [];
    console.log(allPosts)
    const categories = allPosts.filter(post =>{
        if(!categorholders.includes(post.topic)){
            categorholders.push(post.topic);
        }
        return !categorholders.includes(post.topic)
    }
        )
        const options = categorholders.map(topic =>{ 
            return <option key={topic} value={topic}>{topic}</option>})

            function handleChange(topic){
              setFilter(topic)
            }
  return (
    <div className="form-control">
      <div className="input-group">
        <select className="select select-bordered" onChange={(e)=>handleChange(e.target.value)}>
          <option  value={"all"}>
            All Topics
          </option>
          {options}
        </select>
        <button className="btn">Filter</button>
      </div>
    </div>
  );
}
