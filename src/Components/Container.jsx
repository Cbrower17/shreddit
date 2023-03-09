import Post from "./Post";
import FilterBox from "./FilterBox";

export default function Container({allPosts, posts, handleNewComment,users,setFilter }) {
  const shownPosts = posts.map((post) => {
    return (
      <Post handleNewComment={handleNewComment} key={post.id} post={post} users={users} />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h1>
        Im a container
        <br />
        add sorting options up here
        <FilterBox allPosts ={allPosts} setFilter={setFilter}/>
      </h1>
      {shownPosts}
    </div>
  );
}
