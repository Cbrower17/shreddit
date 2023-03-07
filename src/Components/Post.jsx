import Comments from './Comments.jsx'
import NewComment from './NewComment.jsx'

export default function Post({post, handleNewComment}){

    return (
    <div className='post-card'>
        <h3>{post.title}</h3>
        <img src={post.image} alt ={post.title}/>
        <p>{post.likes}</p>
        <div>
            <NewComment handleNewComment={handleNewComment} postId = {post.id}/>
            comments:
        <Comments post = {post}/>
        </div>
        </div>
)}