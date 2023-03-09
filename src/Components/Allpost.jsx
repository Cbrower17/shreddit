import Container from "./Container"


export default function Allpost({posts,handleNewComment,users,allPosts, setFilter}){

    return <div><Container setFilter={setFilter} allPosts={allPosts} posts = {posts} handleNewComment={handleNewComment} users={users}/></div>
}