import Container from "./Container"


export default function Allpost({posts,handleNewComment}){

    return <div><Container posts = {posts} handleNewComment={handleNewComment}/></div>
}