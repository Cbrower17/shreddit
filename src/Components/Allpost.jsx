import Container from "./Container"


export default function Allpost({posts,handleNewComment,users,allPosts, setFilter, setSort}){

    return <div><Container setSort={setSort} setFilter={setFilter} allPosts={allPosts} posts = {posts} handleNewComment={handleNewComment} users={users}/></div>
}