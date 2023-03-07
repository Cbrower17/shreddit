import Comment from "./comment"

export default function Comments ({post}){
    console.log(post)
    const allComments = post.comments.map(comment=> {
return <Comment key = {comment.id} comment={comment}/>
    })

    return <div>{allComments}</div>
}