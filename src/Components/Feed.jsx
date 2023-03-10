import Container from "./Container"
export default function Feed({posts,handleNewComment,users, allPosts,setFilter, setSort, handlePostVote,deleteComment}) {

    return <div>i a feed
        <Container deleteComment={deleteComment} handlePostVote={handlePostVote} setSort={setSort} setFilter ={setFilter} allPosts={allPosts} posts = {posts} handleNewComment={handleNewComment} users={users} />
    </div>
}