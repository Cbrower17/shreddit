import Post from "./Post";


export default function Container({posts, handleNewComment}){
    const shownPosts = posts.map(post =>{    
        return <Post handleNewComment={handleNewComment} key={post.id} post = {post} />
    })
    
    return( <div className="container">
        <h1>Im a container</h1>
        {shownPosts}
    </div>)
}