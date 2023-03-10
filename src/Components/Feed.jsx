import Container from "./Container"
export default function Feed({posts,handleNewComment,users, allPosts,setFilter, setSort}) {

    return <div>i a feed
        <Container setSort={setSort} setFilter ={setFilter} allPosts={allPosts} posts = {posts} handleNewComment={handleNewComment} users={users} />
    </div>
}