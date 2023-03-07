import {useState} from 'react'
export default function Newpost({handlePost}){
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [img,setImage] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        const newobj = {
            title: title,
            postVotes: 0,
            desc:desc,
            user: "mario",
            image: img
        }
        handlePost(newobj)
        setDesc("")
        setImage("")
        setTitle("")
      }
    return (
        <div>
            <h1>New Post</h1>
        <form onSubmit={(e)=>handleSubmit(e)}> 
            <h3>Title</h3>
            <input type="text" value={title} onChange= {(e)=> setTitle(e.target.value)} />
            <h3>Description</h3>
            <input type="text" value={desc} onChange= {(e)=> setDesc(e.target.value)} />
            <h3>Image URL</h3>
            <input type="text" value={img} onChange= {(e)=> setImage(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}