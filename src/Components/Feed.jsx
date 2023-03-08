import Container from "./Container"
export default function Feed({posts,handleNewComment,user}){

    return <div>i a feed
        <Container posts = {posts} handleNewComment={handleNewComment}/>
    </div>
}