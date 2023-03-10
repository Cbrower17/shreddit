import Post from "./Post";
import FilterBox from "./FilterBox";
import SortBox from "./SortBox";

export default function Container({allPosts, posts, handleNewComment,users,setFilter, setSort }) {
  const shownPosts = posts.map((post) => {
    return (
      <Post handleNewComment={handleNewComment} key={post.id} post={post} users={users} />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-5 p-3 ">
      <h1>
        <SortBox setSort={setSort}/>
        <FilterBox allPosts ={allPosts} setFilter={setFilter}/>
      </h1>
      {shownPosts}
    </div>
  );
}
