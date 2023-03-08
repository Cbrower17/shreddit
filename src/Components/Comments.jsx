import Comment from "./comment"

export default function Comments ({post}){
    
    const allComments = post.comments.map(comment=> {
return <Comment key = {comment.id} comment={comment}/>
    })

    return <div className="table object-fill w-11/12">{allComments}</div>
}