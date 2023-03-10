import Container from "./Container"


export default function Allpost({posts,handleNewComment,users,allPosts, setFilter, setSort,handlePostVote, deleteComment}){

    return <div><Container deleteComment={deleteComment} handlePostVote={handlePostVote} setSort={setSort} setFilter={setFilter} allPosts={allPosts} posts = {posts} handleNewComment={handleNewComment} users={users}/></div>
}