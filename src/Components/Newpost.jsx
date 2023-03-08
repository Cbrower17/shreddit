import {useState} from 'react'
export default function Newpost({handlePost}){
    const [title,setTitle] = useState('')
    const [topic,setTopic] = useState('')
    const [desc,setDesc] = useState('')
    const [img,setImage] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        const newobj = {
            title: title,
            postVotes: 0,
            topic: topic,
            desc:desc,
            user: "mario",
            image: img
        }
        handlePost(newobj)
        setTopic("")
        setDesc("")
        setImage("")
        setTitle("")
      }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">New Post</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <form onSubmit={(e)=>handleSubmit(e)}> 
            <h3>Title</h3>
            <input type="text" value={title} onChange= {(e)=> setTitle(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
            <h3>Topic</h3>
            <input type="text" value={topic} onChange= {(e)=> setTopic(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <h3>Description</h3>
            <input type="text" value={desc} onChange= {(e)=> setDesc(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
            <h3>Image URL</h3>
            <input type="text" value={img} onChange= {(e)=> setImage(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
            <button type="submit" className="btn btn-wide">Submit</button>
        </form>
    </div>
  </div>
</div>
        // <div>
        //     <h1>New Post</h1>
        // <form onSubmit={(e)=>handleSubmit(e)}> 
        //     <h3>Title</h3>
        //     <input type="text" value={title} onChange= {(e)=> setTitle(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
        //     <h3>Topic</h3>
        //     <input type="text" value={topic} onChange= {(e)=> setTopic(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        //     <h3>Description</h3>
        //     <input type="text" value={desc} onChange= {(e)=> setDesc(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
        //     <h3>Image URL</h3>
        //     <input type="text" value={img} onChange= {(e)=> setImage(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
        //     <button type="submit" className="btn btn-wide">Submit</button>
        // </form>
        // </div>
    )
}