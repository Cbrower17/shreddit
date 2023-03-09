import Container from "./Container"
export default function Feed({posts,handleNewComment,users, allPosts,setFilter}) {

    return <div>i a feed
        <Container setFilter ={setFilter} allPosts={allPosts} posts = {posts} handleNewComment={handleNewComment} users={users} />
    </div>
}